import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * Docs are staged into `.standards-src` before dev/build (see scripts/stage-standards-docs.mjs).
 * Starlight's default docsLoader only reads `src/content/docs`; a glob loader keeps the
 * submodule content out of `src/`.
 */
export const collections = {
  docs: defineCollection({
    loader: glob({
      base: '.standards-src',
      pattern: '**/[^_]*.{md,mdx}',
    }),
    schema: docsSchema(),
  }),
};
