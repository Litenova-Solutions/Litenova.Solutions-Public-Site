import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

export const docs = defineDocs({
  dir: '.standards-src',
  docs: {
    files: ['**/*.{md,mdx}'],
  },
  meta: {
    files: ['**/meta.json'],
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      // Standards pages fence sample files by their filename convention. Shiki
      // ships no grammar for some of those labels, and an unknown language is a
      // hard build error rather than a fallback.
      langAlias: {
        ...rehypeCodeDefaultOptions.langAlias,
        gitignore: 'text',
        dockerignore: 'text',
        editorconfig: 'ini',
        env: 'ini',
      },
    },
  },
});
