/**
 * Build Starlight sidebar link trees from the staged docs folder.
 * Starlight's `autogenerate` only indexes `src/content/docs`; we use `.standards-src`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

export function resolveDocsRoot() {
  const staged = path.join(root, '.standards-src');
  const submodule = path.join(root, 'engineering-standards', 'docs');
  if (fs.existsSync(staged)) return staged;
  if (fs.existsSync(submodule)) return submodule;
  return staged;
}

function titleFromFilename(name) {
  const base = name.replace(/\.mdx?$/i, '');
  if (base.toLowerCase() === 'readme') return 'Index';
  return base
    .replace(/\.feature$/i, '')
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function toLink(relativeDir, filename) {
  const slug = filename.replace(/\.mdx?$/i, '');
  const parts = relativeDir.split('/').filter(Boolean);
  if (slug.toLowerCase() === 'readme') {
    return `/${parts.join('/')}/readme`;
  }
  return `/${[...parts, slug].join('/')}`.replace(/\/readme$/, '/readme');
}

/**
 * @param {string} docsRoot
 * @param {string} relativeDir e.g. `blueprints/frontend`
 * @param {{ excludeReadme?: boolean }} [options]
 */
export function buildSidebarFromDir(docsRoot, relativeDir, options = {}) {
  const abs = path.join(docsRoot, relativeDir);
  if (!fs.existsSync(abs)) return [];

  const { excludeReadme = false } = options;
  const items = [];

  for (const entry of fs.readdirSync(abs, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name, 'en'),
  )) {
    if (entry.name.startsWith('_')) continue;

    if (entry.isDirectory()) {
      const nested = buildSidebarFromDir(docsRoot, `${relativeDir}/${entry.name}`, options);
      if (nested.length === 0) continue;
      items.push({
        label: titleFromFilename(entry.name),
        collapsed: true,
        items: nested,
      });
      continue;
    }

    if (!/\.mdx?$/i.test(entry.name)) continue;
    if (excludeReadme && entry.name.toLowerCase() === 'readme.md') continue;

    items.push({
      label: titleFromFilename(entry.name),
      link: toLink(relativeDir, entry.name),
    });
  }

  return items;
}
