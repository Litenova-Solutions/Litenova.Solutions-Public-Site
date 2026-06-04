#!/usr/bin/env node
/**
 * Copy engineering-standards/docs into .standards-src, overlay standards-overrides,
 * and apply site transforms (titles, link paths, horizontal rule cleanup).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const SRC_DOCS = path.join(root, 'engineering-standards', 'docs');
const STAGE_DIR = path.join(root, '.standards-src');
const OVERRIDES_DIR = path.join(root, 'standards-overrides');

/** Files to omit from the public site (empty = ship full docs tree including templates). */
const EXCLUDE_REL = new Set();

const COMPAT_FIXES = [];

function rmDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyDir(src, dest, rel = '') {
  for (const name of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, name.name);
    const relPath = path.join(rel, name.name).replace(/\\/g, '/');

    if (name.isDirectory()) {
      fs.mkdirSync(path.join(dest, name.name), { recursive: true });
      copyDir(srcPath, path.join(dest, name.name), relPath);
      continue;
    }

    if (!name.isFile()) continue;
    if (EXCLUDE_REL.has(relPath)) continue;

    fs.mkdirSync(path.dirname(path.join(dest, name.name)), { recursive: true });
    fs.copyFileSync(srcPath, path.join(dest, name.name));
  }
}

function overlayDir(src, dest) {
  if (!fs.existsSync(src)) return;

  for (const name of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, name.name);
    const destPath = path.join(dest, name.name);

    if (name.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      overlayDir(srcPath, destPath);
    } else if (name.isFile()) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function applyCompatFixes() {
  for (const { file, search, replace } of COMPAT_FIXES) {
    const target = path.join(STAGE_DIR, file);
    if (!fs.existsSync(target)) continue;

    const text = fs.readFileSync(target, 'utf8');
    if (!text.includes(search)) continue;

    fs.writeFileSync(target, text.replace(search, replace), 'utf8');
  }
}

function toSiteSlug(filePath) {
  let slug = filePath.replace(/\\/g, '/').replace(/\.mdx?$/i, '');
  if (slug.endsWith('/README')) slug = `${slug.slice(0, -7)}/readme`;
  else if (slug === 'README') slug = 'readme';
  return `/${slug}`;
}

function resolveDocPath(href, currentRel) {
  const [rawPath, hash = ''] = href.split('#');
  if (!rawPath || /^https?:\/\//i.test(rawPath) || rawPath.startsWith('mailto:')) {
    return { external: true, href };
  }

  let resolved = rawPath.replace(/\\/g, '/');
  const currentDir = path.posix.dirname(currentRel.replace(/\\/g, '/'));

  if (resolved.startsWith('/')) {
    resolved = resolved.slice(1);
  } else if (resolved.startsWith('docs/')) {
    resolved = resolved.slice(5);
  } else {
    resolved = path.posix.normalize(path.posix.join(currentDir, resolved));
  }

  const hashSuffix = hash ? `#${hash}` : '';

  if (/\.mdx?$/i.test(resolved)) {
    return { external: false, href: `${toSiteSlug(resolved)}${hashSuffix}` };
  }

  return { external: false, href: href };
}

function rewriteMarkdownLinks(text, currentRel) {
  return text.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, label, href) => {
    const trimmed = href.trim();
    if (trimmed.startsWith('#')) return match;

    const { external, href: next } = resolveDocPath(trimmed, currentRel);
    if (external && next === trimmed) return match;
    if (!external && next === trimmed) return match;

    return `[${label}](${next})`;
  });
}

/** Collapse consecutive `---` thematic breaks (common after section edits). */
function collapseHorizontalRules(text) {
  let out = text.replace(/\r\n/g, '\n');
  let prev;
  do {
    prev = out;
    out = out.replace(/(\n---\n)(?:[ \t]*\n---\n)+/g, '$1');
    out = out.replace(/(---\n\n)---\n\n/g, '$1');
    out = out.replace(/(\n---\n)\n{3,}/g, '$1\n\n');
  } while (out !== prev);
  return out;
}

function stripDuplicateH1(text) {
  const fmMatch = text.match(/^---\n[\s\S]*?\n---\n*/);
  if (!fmMatch) return text;

  const rest = text.slice(fmMatch[0].length);
  const stripped = rest.replace(/^\s*#\s+.+\r?\n(\s*\r?\n)?/, '');
  return fmMatch[0] + stripped;
}

function injectTitles(text) {
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch && /^title:\s/m.test(fmMatch[1])) return text;

  const h1Match = text.match(/^#\s+(.+)$/m);
  if (!h1Match) return text;

  const title = h1Match[1].trim();
  const block = `---\ntitle: ${JSON.stringify(title)}\n---\n\n`;

  if (fmMatch) {
    return text.replace(/^---\n[\s\S]*?\n---\n?/, block);
  }
  return block + text;
}

function transformMarkdown(fileRel, text) {
  let out = injectTitles(text);
  out = stripDuplicateH1(out);
  out = collapseHorizontalRules(out);
  out = rewriteMarkdownLinks(out, fileRel);
  return out;
}

function processAllMarkdown(dir, rel = '') {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    const relPath = path.join(rel, name.name).replace(/\\/g, '/');

    if (name.isDirectory()) {
      processAllMarkdown(full, relPath);
      continue;
    }
    if (!/\.mdx?$/i.test(name.name)) continue;

    const raw = fs.readFileSync(full, 'utf8');
    fs.writeFileSync(full, transformMarkdown(relPath, raw), 'utf8');
  }
}

if (!fs.existsSync(SRC_DOCS)) {
  console.error(
    'engineering-standards/docs not found. Run: git submodule update --init --recursive',
  );
  process.exit(1);
}

rmDir(STAGE_DIR);
fs.mkdirSync(STAGE_DIR, { recursive: true });
copyDir(SRC_DOCS, STAGE_DIR);
overlayDir(OVERRIDES_DIR, STAGE_DIR);
applyCompatFixes();
processAllMarkdown(STAGE_DIR);

console.log(`Staged standards docs → ${path.relative(root, STAGE_DIR)}`);
