# Maintainer Guide

Notes for maintaining the unified Litenova public site (marketing + Engineering Standards).

## Content flow

```text
Engineering-Standards repo (submodule: engineering-standards/)
        │
        ▼
pnpm stage  →  scripts/stage-standards-docs.mjs
        │
        ├─ copy docs/ → .standards-src/
        ├─ overlay standards-overrides/
        ├─ transform links, titles, frontmatter
        ├─ move splash index.md → standards-splash/body.md
        └─ rename root README.md → doc-map.md
        │
        ▼
Fumadocs MDX  →  lib/source.ts  →  /Standards/* routes
```

`.standards-src/` and `.source/` are generated; do not edit them directly.

## Sidebar

Edit `standards-overrides/meta.json` for the top-level sidebar structure. Per-folder sidebars live in nested `meta.json` files under `standards-overrides/conventions/`, `decisions/`, and `runbooks/`.

After editing, run `pnpm stage && pnpm dev` to verify navigation.

## Standards splash home

- Hero: `components/standards/StandardsHero.tsx`
- Body markdown: `standards-overrides/index.md` (staged to `standards-splash/body.md`)

## Marketing landing page

React components in `components/marketing/`, composed in `app/page.tsx`. SEO metadata is in `lib/marketing-metadata.ts`.

## Search

Orama search API route: `app/Standards/api/search/route.ts`. Configured in `app/layout.tsx` via RootProvider at `/Standards/api/search`.

## Deployment (Vercel)

| Setting | Value |
|---------|-------|
| Root Directory | `.` (repo root) |
| Framework | Next.js |
| Node.js | 22 |
| Include Git Submodules | **ON** |
| Production branch | `main` |
| Domain | `litenova.solutions` |

Build command: `pnpm build` (runs stage + next build).

## Updating standards content

1. Merge changes in Engineering-Standards.
2. Bump submodule pointer in this repo.
3. Push to `main`; Vercel deploys automatically.

## Local commands

| Command | Purpose |
|---------|---------|
| `pnpm stage` | Refresh staged content |
| `pnpm dev` | Stage + dev server |
| `pnpm build` | Stage + production build |
| `pnpm start` | Run production server locally |
