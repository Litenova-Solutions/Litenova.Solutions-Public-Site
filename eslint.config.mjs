import { createRequire } from 'node:module';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

// WORKSPACE.CONFIG.ESLINT.001: the flat config states a concrete React version.
// Leaving it at 'detect' makes eslint-plugin-react resolve the version through a
// context API that ESLint 10 no longer provides, and every lint run throws.
const require = createRequire(import.meta.url);
const reactVersion = require('react/package.json').version;

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    settings: {
      react: { version: reactVersion },
    },
  },
  globalIgnores([
    '.next/**',
    'dist/**',
    '.vinext/**',
    '.wrangler/**',
    '.source/**',
    '.standards-src/**',
    'standards/**',
    'standards-splash/**',
  ]),
]);
