#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const standardsRoot = path.join(root, 'standards');
const docsSource = path.join(standardsRoot, 'docs');
const templatesSource = path.join(standardsRoot, 'templates', 'consumer');
const overridesSource = path.join(root, 'standards-overrides');
const stageDirectory = path.join(root, '.standards-src');
const splashDirectory = path.join(root, 'standards-splash');
const publicDirectory = path.join(root, 'public');
const standardsPrefix = '/Standards';
const siteUrl = 'https://www.litenova.solutions';
const standardsRepository =
  'https://github.com/Litenova-Solutions/Engineering-Standards';

function removeDirectory(directory) {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
}

function copyDirectory(source, destination) {
  if (!fs.existsSync(source)) return;

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destinationPath, { recursive: true });
      copyDirectory(sourcePath, destinationPath);
      continue;
    }

    if (!entry.isFile()) continue;
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    fs.copyFileSync(sourcePath, destinationPath);
  }
}

function copyFile(source, destination) {
  if (!fs.existsSync(source)) return;
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function listMarkdownFiles(directory, relativeDirectory = '') {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    const relativePath = path
      .join(relativeDirectory, entry.name)
      .replace(/\\/g, '/');

    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath, relativePath));
    } else if (entry.isFile() && /\.mdx?$/i.test(entry.name)) {
      files.push(relativePath);
    }
  }

  return files;
}

function splitFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n*/);
  if (!match) return { frontmatter: '', body: text };

  return {
    frontmatter: match[1],
    body: text.slice(match[0].length),
  };
}

function cleanInlineMarkdown(value) {
  return value
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/[`*_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateDescription(value, maximumLength = 158) {
  if (value.length <= maximumLength) return value;

  const firstSentence = value.match(/^.*?[.!?](?=\s|$)/)?.[0];
  if (firstSentence && firstSentence.length >= 30) return firstSentence;

  const shortened = value.slice(0, maximumLength + 1);
  const lastSpace = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, lastSpace > 100 ? lastSpace : maximumLength).trim()}...`;
}

function extractDescription(body) {
  const intent = body.match(
    /(?:^|\n)## Intent\s*\n+([\s\S]*?)(?=\n## |$)/i,
  )?.[1];
  const candidates = (intent ?? body).split(/\n\s*\n/);

  for (const candidate of candidates) {
    const paragraph = candidate.trim();
    if (!paragraph) continue;
    if (/^(#|[-*+] |\d+\. |\||```|:::|>)/.test(paragraph)) continue;

    const description = cleanInlineMarkdown(paragraph);
    if (description.length >= 30) return truncateDescription(description);
  }

  return undefined;
}

function addMetadata(text) {
  const { frontmatter, body } = splitFrontmatter(text);
  const hasJsonFrontmatter = frontmatter.trimStart().startsWith('{');
  const title = hasJsonFrontmatter
    ? undefined
    : frontmatter.match(/^title:\s*(.+)$/m)?.[1];
  const heading = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const description = hasJsonFrontmatter
    ? undefined
    : frontmatter.match(/^description:\s*(.+)$/m)?.[1];
  const inferredDescription = extractDescription(body);

  if (!title && !heading) return text;

  const metadata =
    frontmatter && !hasJsonFrontmatter ? frontmatter.split('\n') : [];
  if (!title && heading) metadata.unshift(`title: ${JSON.stringify(heading)}`);
  if (!description && inferredDescription) {
    metadata.push(`description: ${JSON.stringify(inferredDescription)}`);
  }

  const bodyWithoutDuplicateTitle = body.replace(/^\s*#\s+.+\n(?:\s*\n)?/, '');
  const templateMetadata = hasJsonFrontmatter
    ? `## Template metadata\n\n\`\`\`json\n${frontmatter.trim()}\n\`\`\`\n\n`
    : '';

  return `---\n${metadata.join('\n').trim()}\n---\n\n${templateMetadata}${bodyWithoutDuplicateTitle}`;
}

function routeForMarkdown(relativePath) {
  let slug = relativePath.replace(/\\/g, '/').replace(/\.mdx?$/i, '');

  if (/(^|\/)(README|readme|index)$/i.test(slug)) {
    slug = slug.replace(/(^|\/)(README|readme|index)$/i, '');
  }

  return slug ? `${standardsPrefix}/${slug}` : standardsPrefix;
}

function normalizeSourcePath(rawPath, currentRelativePath) {
  const currentDirectory = path.posix.dirname(currentRelativePath);
  let resolved = rawPath.replace(/\\/g, '/');

  if (resolved.startsWith('/')) return resolved.slice(1);

  resolved = path.posix.normalize(path.posix.join(currentDirectory, resolved));

  if (/^(\.\.\/)+ROADMAP\.md$/i.test(resolved)) return 'roadmap.md';
  if (/^(\.\.\/)+CHANGELOG\.md$/i.test(resolved)) return 'release-notes.md';

  resolved = resolved.replace(/^(\.\.\/)+templates\/consumer\//i, 'templates/');
  resolved = resolved.replace(/^(\.\.\/)+docs\//i, '');

  return resolved;
}

function rewriteMarkdownLinks(text, currentRelativePath) {
  return text.replace(/\[([^\]]*)]\(([^)]+)\)/g, (match, label, target) => {
    const trimmedTarget = target.trim();
    if (
      trimmedTarget.startsWith('#') ||
      /^(https?:|mailto:|tel:)/i.test(trimmedTarget)
    ) {
      return match;
    }

    const hashIndex = trimmedTarget.indexOf('#');
    const rawPath =
      hashIndex >= 0 ? trimmedTarget.slice(0, hashIndex) : trimmedTarget;
    const hash = hashIndex >= 0 ? trimmedTarget.slice(hashIndex) : '';

    if (!rawPath) return match;
    if (rawPath.startsWith(`${standardsPrefix}/`)) return match;
    if (rawPath === standardsPrefix) return match;
    if (rawPath.startsWith('/') && !rawPath.startsWith('/docs/')) return match;

    const normalizedPath = normalizeSourcePath(rawPath, currentRelativePath);

    // A link that still escapes the staged docs tree targets repository material
    // that this site does not publish, such as the reference validators. Point it
    // at the pinned source tag instead of emitting an unresolvable route.
    if (normalizedPath.startsWith('../')) {
      let repositoryPath = normalizedPath;
      while (repositoryPath.startsWith('../'))
        repositoryPath = repositoryPath.slice(3);
      const sourceLink =
        standardsRepository +
        '/blob/v' +
        manifest.version +
        '/' +
        repositoryPath;
      return '[' + label + '](' + sourceLink + hash + ')';
    }
    if (!/\.mdx?$/i.test(normalizedPath)) return match;

    return `[${label}](${routeForMarkdown(normalizedPath)}${hash})`;
  });
}

function transformMarkdown(relativePath, text) {
  const normalized = text.replace(/\r\n/g, '\n');
  return (
    rewriteMarkdownLinks(addMetadata(normalized), relativePath).trimEnd() + '\n'
  );
}

function createJsonTemplatePage() {
  const templatePath = path.join(templatesSource, 'standards.project.json');
  if (!fs.existsSync(templatePath)) return;

  const json = fs.readFileSync(templatePath, 'utf8').trim();
  const page = `# standards.project.json\n\n## Intent\n\nThis consumer configuration selects the standards profile and enabled extensions for one repository. Copy it to the consumer repository root and replace the example values.\n\n## Template\n\n\`\`\`json\n${json}\n\`\`\`\n`;
  const destination = path.join(
    stageDirectory,
    'templates',
    'standards-project-json.md',
  );

  fs.writeFileSync(destination, page, 'utf8');
}

function prepareSourceTree() {
  removeDirectory(stageDirectory);
  fs.mkdirSync(stageDirectory, { recursive: true });

  copyDirectory(docsSource, stageDirectory);
  copyDirectory(templatesSource, path.join(stageDirectory, 'templates'));
  copyFile(
    path.join(standardsRoot, 'ROADMAP.md'),
    path.join(stageDirectory, 'roadmap.md'),
  );
  copyFile(
    path.join(standardsRoot, 'CHANGELOG.md'),
    path.join(stageDirectory, 'release-notes.md'),
  );
  copyDirectory(overridesSource, stageDirectory);
  createJsonTemplatePage();

  const readme = path.join(stageDirectory, 'README.md');
  if (fs.existsSync(readme)) {
    fs.renameSync(readme, path.join(stageDirectory, 'doc-map.md'));
  }
}

function transformSourceTree() {
  for (const relativePath of listMarkdownFiles(stageDirectory)) {
    const fullPath = path.join(stageDirectory, relativePath);
    const transformed = transformMarkdown(
      relativePath,
      fs.readFileSync(fullPath, 'utf8'),
    );
    fs.writeFileSync(fullPath, transformed, 'utf8');
  }
}

function moveSplashPage() {
  const splashSource = path.join(stageDirectory, 'index.md');
  const splashDestination = path.join(splashDirectory, 'body.md');

  if (!fs.existsSync(splashSource)) {
    throw new Error('standards-overrides/index.md did not stage correctly.');
  }

  fs.mkdirSync(splashDirectory, { recursive: true });
  fs.copyFileSync(splashSource, splashDestination);
  fs.rmSync(splashSource);
}

function validateInternalRoutes() {
  const routes = new Set([
    standardsPrefix,
    ...listMarkdownFiles(stageDirectory).map(routeForMarkdown),
  ]);
  const errors = [];
  const files = [
    ...listMarkdownFiles(stageDirectory).map((relativePath) => ({
      relativePath,
      fullPath: path.join(stageDirectory, relativePath),
    })),
    {
      relativePath: 'standards-overrides/index.md',
      fullPath: path.join(splashDirectory, 'body.md'),
    },
  ];

  for (const file of files) {
    const text = fs.readFileSync(file.fullPath, 'utf8');
    const links = text.matchAll(
      /\[[^\]]*]\((\/Standards[^)#\s]*)(?:#[^)]*)?\)/g,
    );

    for (const match of links) {
      const route = match[1].replace(/\/$/, '') || standardsPrefix;
      if (!routes.has(route)) {
        errors.push(`${file.relativePath}: unresolved route ${route}`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Broken standards links:\n${errors.join('\n')}`);
  }
}

function forLlmText(text) {
  const { frontmatter, body } = splitFrontmatter(text);
  const title = frontmatter
    .match(/^title:\s*(.+)$/m)?.[1]
    ?.replace(/^['"]|['"]$/g, '');
  return `${title ? `# ${title}\n\n` : ''}${body.trim()}`;
}

function writeLlmFiles() {
  const manifest = JSON.parse(
    fs.readFileSync(
      path.join(standardsRoot, 'standards.manifest.json'),
      'utf8',
    ),
  );
  const markdownFiles = listMarkdownFiles(stageDirectory).sort();
  const indexLines = [
    '# Litenova Solutions',
    '',
    '> Software engineering for distributed .NET systems, codebase review, and open-source tools.',
    '',
    `- [Website](${siteUrl}/)`,
    `- [Engineering Services](${siteUrl}/#services)`,
    `- [Products and Open Source](${siteUrl}/#projects)`,
    `- [Engineering Standards v${manifest.version}](${siteUrl}${standardsPrefix})`,
    `- [Standards documentation map](${siteUrl}${standardsPrefix}/doc-map)`,
    `- [Complete standards text](${siteUrl}/llms-full.txt)`,
    '',
  ];

  const fullText = [
    ...indexLines,
    '# Engineering Standards Full Text',
    '',
    `Version: ${manifest.version}`,
    `Source: https://github.com/Litenova-Solutions/Engineering-Standards/tree/v${manifest.version}`,
    '',
    ...markdownFiles.flatMap((relativePath) => {
      const content = forLlmText(
        fs.readFileSync(path.join(stageDirectory, relativePath), 'utf8'),
      );
      return [
        `Source page: ${siteUrl}${routeForMarkdown(relativePath)}`,
        '',
        content,
        '',
        '---',
        '',
      ];
    }),
  ];

  fs.mkdirSync(publicDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(publicDirectory, 'llms.txt'),
    indexLines.join('\n'),
    'utf8',
  );
  fs.writeFileSync(
    path.join(publicDirectory, 'llms-full.txt'),
    fullText.join('\n'),
    'utf8',
  );
}

if (!fs.existsSync(docsSource)) {
  throw new Error(
    'Engineering Standards content is missing. Run git submodule update --init --recursive.',
  );
}

const manifest = JSON.parse(
  fs.readFileSync(path.join(standardsRoot, 'standards.manifest.json'), 'utf8'),
);

prepareSourceTree();
transformSourceTree();
moveSplashPage();
validateInternalRoutes();
writeLlmFiles();

console.log(
  `Staged ${listMarkdownFiles(stageDirectory).length} standards pages from Engineering Standards v${manifest.version}.`,
);
