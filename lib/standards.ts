import manifest from '@/standards/standards.manifest.json';

export const standardsVersion = manifest.version;
export const standardsTag = `v${standardsVersion}`;
export const standardsRepository =
  'https://github.com/Litenova-Solutions/Engineering-Standards';

export function standardsSourcePath(pagePath: string) {
  if (pagePath === 'doc-map.md') return 'docs/README.md';
  if (pagePath === 'roadmap.md') return 'ROADMAP.md';
  if (pagePath === 'release-notes.md') return 'CHANGELOG.md';
  if (pagePath === 'templates/standards-project-json.md') {
    return 'templates/consumer/standards.project.json';
  }
  if (pagePath.startsWith('templates/')) {
    return pagePath.replace(/^templates\//, 'templates/consumer/');
  }

  return `docs/${pagePath}`;
}
