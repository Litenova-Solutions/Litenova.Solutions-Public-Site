# Contributing to Litenova Solutions Public Site

Thank you for your interest in contributing. This repository hosts the public marketing site and the Engineering Standards documentation shell at [litenova.solutions](https://litenova.solutions).

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## What belongs where

| Change type | Repository |
|-------------|------------|
| Next.js app, marketing copy, theme, staging scripts, `standards-overrides/` | **This repository** |
| Normative standards markdown (conventions, guides, ADRs, runbooks) | [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards) |

Do not edit files under `engineering-standards/` directly for long-lived changes. That directory is a git submodule pointing at the Engineering-Standards repo.

## Prerequisites

- Node.js 22+
- pnpm 10+
- Git with submodule support

## Local setup

```bash
git clone --recurse-submodules git@github.com:Litenova-Solutions/Litenova.Solutions-Public-Site.git
cd Litenova.Solutions-Public-Site
git submodule update --init --recursive   # if needed
pnpm install
pnpm dev
```

Open:

- Marketing: http://localhost:3000/
- Standards home: http://localhost:3000/Standards/
- Sample doc: http://localhost:3000/Standards/guides/onboarding

## Website changes (this repo)

1. Create a branch from `main`.
2. Make your changes in `app/`, `components/`, `lib/`, or `standards-overrides/`.
3. Run `pnpm build` before opening a pull request.
4. Open a PR with a clear description of what changed and why.

## Standards content changes

1. Open a PR in [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards).
2. After merge, update the submodule pointer in this repo:

   ```bash
   cd engineering-standards
   git pull origin main
   cd ..
   git add engineering-standards
   git commit -m "chore: bump engineering-standards submodule"
   ```

3. Push and open a PR here so the live site picks up the new content.

## Site-only standards pages

These files live in this repo under `standards-overrides/`:

- `index.md` — splash home body (staged to `standards-splash/body.md`)
- `meta.json` — sidebar structure

Edit them here when you need site-specific presentation without changing normative standards content.

## Questions

Open a [GitHub issue](https://github.com/Litenova-Solutions/Litenova.Solutions-Public-Site/issues) for bugs or feature requests related to the website tooling.
