# Engineering Standards site (Astro Starlight)

Published at [https://litenova.solutions/Standards/](https://litenova.solutions/Standards/) from the same GitHub Pages deploy as the marketing `index.html`.

## Content flow

1. **Submodule** `engineering-standards/` (read-only; do not edit inside it).
2. **Stage** `pnpm docs:stage` copies the full `engineering-standards/docs` tree → `.standards-src`, overlays `standards-overrides/`, then:
   - Injects `title` frontmatter and removes duplicate body `#` headings
   - Collapses consecutive `---` horizontal rules
   - Rewrites relative `.md` links to Starlight routes
3. **Build** Starlight reads staged markdown via `src/content.config.ts` (glob loader on `.standards-src`, not `src/content/docs`). Output goes to gitignored `Standards/`.

Starlight has no `docs.root` option yet; the glob loader on `.standards-src` is the equivalent approach.

Sidebar sections for **Blueprints**, **Templates**, **Decisions**, and **Runbooks** are built from the staged tree in `scripts/sidebar-from-docs.mjs` (Starlight `autogenerate` only scans `src/content/docs`, so it stays empty with our layout).

Home page copy lives in `standards-overrides/index.md`, not in the submodule.

## Commands

```bash
git submodule update --init --recursive
pnpm install
pnpm docs:dev      # http://localhost:4321/Standards/
pnpm docs:build
pnpm docs:preview
```

## CI

`.github/workflows/deploy-pages.yml` runs `pnpm docs:build` then uploads the repo root (marketing + `Standards/`) to GitHub Pages.
