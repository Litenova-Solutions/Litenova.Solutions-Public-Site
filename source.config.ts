import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: '.standards-src',
  docs: {
    files: ['**/*.{md,mdx}'],
  },
  meta: {
    files: ['**/meta.json'],
  },
});

export default defineConfig();
