import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const standardsRoot = path.join(root, 'engineering-standards');
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
  await read('engineering-standards/standards.manifest.json'),
);

check(packageJson.packageManager === 'pnpm@11.13.1', 'packageManager must match the v1 manifest.');
check(packageJson.dependencies.next === '16.2.10', 'Next.js must match the v1 manifest.');
check(packageJson.dependencies.react === '19.2.7', 'React must match the v1 manifest.');
check(standardsManifest.version === '1.0.0', 'The standards manifest must be version 1.0.0.');

const standardsHead = git(['rev-parse', 'HEAD'], standardsRoot);
const standardsTagCommit = git(['rev-parse', 'v1.0.0^{commit}'], standardsRoot);
check(standardsHead === standardsTagCommit, 'The standards submodule HEAD must match the v1.0.0 tag commit.');
check(
  standardsHead === 'ca022abebd1d74d7b73c2c2e159f71418ec2a00c',
  'The standards submodule must match the published v1.0.0 release commit.',
);

const requiredFiles = [
  'app/robots.ts',
  'app/sitemap.ts',
  'app/manifest.ts',
  'app/opengraph-image.tsx',
  'app/(site)/privacy/page.tsx',
  'app/(site)/accessibility/page.tsx',
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

const stagedPages = (await walk(path.join(root, '.standards-src'))).filter((file) =>
  /\.(md|mdx)$/i.test(file),
);
check(stagedPages.length >= 60, 'At least 60 v1 standards pages must be staged.');

const llmsIndex = await read('public/llms.txt');
check(llmsIndex.includes('Engineering Standards v1.0.0'), 'llms.txt must identify standards v1.0.0.');
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
const sourceFiles = git(['ls-files', '--cached', '--others', '--exclude-standard', '-z'])
  .split('\0')
  .filter(Boolean)
  .filter((file) => existsSync(path.join(root, file)))
  .filter((file) => !file.startsWith('engineering-standards/'))
  .filter((file) => siteTextExtensions.has(path.extname(file).toLowerCase()))
  .filter((file) => file !== 'pnpm-lock.yaml');

for (const file of sourceFiles) {
  const content = await read(file);
  const nonAscii = content.match(/[^\x00-\x7f]/u);
  check(!nonAscii, `${file} contains non-ASCII text.`);
  check(!unfinishedMarker.test(content), `${file} contains unfinished-work markers.`);
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
  check(nextConfig.includes(header), `Security header is missing from Next.js configuration: ${header}.`);
}

const metaFiles = (await walk(path.join(root, 'standards-overrides'))).filter(
  (file) => path.basename(file) === 'meta.json',
);
for (const metaFile of metaFiles) {
  try {
    JSON.parse(await readFile(metaFile, 'utf8'));
  } catch (error) {
    failures.push(`${path.relative(root, metaFile)} is not valid JSON: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error('Site validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Validated standards v${standardsManifest.version}, ${stagedPages.length} staged pages, publication metadata, source text, and security configuration.`,
  );
}
