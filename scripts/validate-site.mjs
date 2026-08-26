import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const standardsRoot = path.join(root, 'standards');
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function git(args, cwd = root) {
  return execFileSync('git', ['-C', cwd, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

async function read(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8');
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(entryPath)));
    else files.push(entryPath);
  }

  return files;
}

const packageJson = JSON.parse(await read('package.json'));
const standardsManifest = JSON.parse(
  await read('standards/standards.manifest.json'),
);
const project = JSON.parse(await read('standards.project.json'));
const manifestVersion = standardsManifest.version;
const standardsTag = `v${manifestVersion}`;

// The manifest is the authority for every tool version this repository shares
// with a consumer repository. Comparing against it keeps a dependency bump and a
// standards bump from drifting apart.
const npm = standardsManifest.packages.npm;
const pinned = { ...packageJson.dependencies, ...packageJson.devDependencies };
const manifestPinnedPackages = [
  '@base-ui/react',
  '@playwright/test',
  '@tailwindcss/postcss',
  '@types/node',
  '@types/react',
  '@types/react-dom',
  'class-variance-authority',
  'clsx',
  'eslint',
  'eslint-config-next',
  'lucide-react',
  'next',
  'prettier',
  'prettier-plugin-tailwindcss',
  'react',
  'react-dom',
  'shadcn',
  'tailwind-merge',
  'tailwindcss',
  'tw-animate-css',
  'typescript',
  'vitest',
];

for (const name of manifestPinnedPackages) {
  check(
    pinned[name] === npm[name],
    `${name} must match the standards manifest pin ${npm[name]}, found ${pinned[name] ?? 'nothing'}.`,
  );
}

check(
  packageJson.packageManager === `pnpm@${standardsManifest.stack.pnpm}`,
  `packageManager must match the manifest pin pnpm@${standardsManifest.stack.pnpm}.`,
);
check(
  (await read('.node-version')).trim() === standardsManifest.stack.node,
  `.node-version must match the manifest pin ${standardsManifest.stack.node}.`,
);
check(
  packageJson.dependencies['react-server-dom-webpack'] === npm.react,
  'react-server-dom-webpack must track the pinned React version.',
);
check(
  project.reviewedStandardsVersion === manifestVersion,
  `standards.project.json must record reviewedStandardsVersion ${manifestVersion}.`,
);

const standardsHead = git(['rev-parse', 'HEAD'], standardsRoot);
const standardsTagCommit = git(
  ['rev-parse', `${standardsTag}^{commit}`],
  standardsRoot,
);
check(
  standardsHead === standardsTagCommit,
  `The standards submodule HEAD must match the ${standardsTag} tag commit.`,
);

const requiredFiles = [
  'app/robots.ts',
  'app/sitemap.ts',
  'app/manifest.ts',
  'app/opengraph-image.tsx',
  'app/(site)/privacy/page.tsx',
  'app/(site)/accessibility/page.tsx',
  'components.json',
  'ui-source-lock.json',
  'standards.project.json',
  'docs/product.md',
  'docs/ui/web/vocabulary.json',
  'public/llms.txt',
  'public/llms-full.txt',
];

for (const requiredFile of requiredFiles) {
  try {
    await read(requiredFile);
  } catch {
    failures.push(`Required publication file is missing: ${requiredFile}.`);
  }
}

const stagedPages = (await walk(path.join(root, '.standards-src'))).filter(
  (file) => /\.(md|mdx)$/i.test(file),
);
check(stagedPages.length >= 70, 'At least 70 standards pages must be staged.');

const llmsIndex = await read('public/llms.txt');
check(
  llmsIndex.includes(`Engineering Standards v${manifestVersion}`),
  `llms.txt must identify standards v${manifestVersion}.`,
);
check(
  llmsIndex.includes('https://www.litenova.solutions/Standards'),
  'llms.txt must use the canonical www origin.',
);

const siteTextExtensions = new Set([
  '.css',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.ts',
  '.tsx',
  '.txt',
  '.yaml',
  '.yml',
]);
const unfinishedMarker = new RegExp(`\\b(?:TO${'DO'}|FIX${'ME'})\\b`);
const sourceFiles = git([
  'ls-files',
  '--cached',
  '--others',
  '--exclude-standard',
  '-z',
])
  .split('\0')
  .filter(Boolean)
  .filter((file) => existsSync(path.join(root, file)))
  .filter((file) => !file.startsWith('standards/'))
  .filter((file) => siteTextExtensions.has(path.extname(file).toLowerCase()))
  .filter((file) => file !== 'pnpm-lock.yaml');

for (const file of sourceFiles) {
  const content = await read(file);
  const nonAscii = content.match(/[^\x00-\x7f]/u);
  check(!nonAscii, `${file} contains non-ASCII text.`);
  check(
    !unfinishedMarker.test(content),
    `${file} contains unfinished-work markers.`,
  );
}

const siteConfig = await read('lib/site.ts');
check(
  siteConfig.includes("url: 'https://www.litenova.solutions'"),
  'Site metadata must use the canonical www origin.',
);

const nextConfig = await read('next.config.ts');
for (const header of [
  'Content-Security-Policy',
  'Permissions-Policy',
  'Referrer-Policy',
  'Strict-Transport-Security',
  'X-Content-Type-Options',
]) {
  check(
    nextConfig.includes(header),
    `Security header is missing from Next.js configuration: ${header}.`,
  );
}

// Every route that the previous standards taxonomy published must still resolve.
// The redirect map is the only thing keeping those addresses alive.
const stagedRoutes = new Set(
  stagedPages
    .map((file) =>
      path
        .relative(path.join(root, '.standards-src'), file)
        .replace(/\\/g, '/'),
    )
    .map((relativePath) => relativePath.replace(/\.mdx?$/i, ''))
    .map((slug) => slug.replace(/(^|\/)(README|index)$/i, ''))
    .map((slug) => (slug ? `/Standards/${slug}` : '/Standards')),
);
stagedRoutes.add('/Standards');

const redirectTargets = [
  ...nextConfig.matchAll(/'(\/Standards[^']*)':\s*\n?\s*'(\/Standards[^']*)'/g),
];
check(
  redirectTargets.length >= 40,
  'The standards redirect map must cover the previous taxonomy.',
);
for (const [, source, destination] of redirectTargets) {
  check(
    stagedRoutes.has(destination),
    `Redirect ${source} points at ${destination}, which is not a staged standards route.`,
  );
}

const metaFiles = (await walk(path.join(root, 'standards-overrides'))).filter(
  (file) => path.basename(file) === 'meta.json',
);
for (const metaFile of metaFiles) {
  try {
    JSON.parse(await readFile(metaFile, 'utf8'));
  } catch (error) {
    failures.push(
      `${path.relative(root, metaFile)} is not valid JSON: ${error.message}`,
    );
  }
}

// Every page named in a navigation override must exist in the staged tree, or
// the sidebar silently drops it.
for (const metaFile of metaFiles) {
  const meta = JSON.parse(await readFile(metaFile, 'utf8'));
  const directory = path.dirname(
    path.relative(path.join(root, 'standards-overrides'), metaFile),
  );
  for (const page of meta.pages ?? []) {
    if (page.startsWith('---') || page.startsWith('[')) continue;
    const base = directory === '.' ? page : `${directory}/${page}`;
    const candidates = [
      `${base}.md`,
      `${base}.mdx`,
      `${base}/index.md`,
      `${base}/meta.json`,
    ];
    const found = candidates.some((candidate) =>
      existsSync(path.join(root, '.standards-src', candidate)),
    );
    check(
      found,
      `${path.relative(root, metaFile)} lists '${page}', which has no staged page.`,
    );
  }
}

if (failures.length > 0) {
  console.error('Site validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Validated standards v${manifestVersion}, ${stagedPages.length} staged pages, ${redirectTargets.length} standards redirects, manifest pins, publication metadata, source text, and security configuration.`,
  );
}
