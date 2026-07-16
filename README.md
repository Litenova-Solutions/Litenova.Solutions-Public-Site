# Litenova Solutions Public Site

[![Live site](https://img.shields.io/badge/live-www.litenova.solutions-ffce63?style=flat-square)](https://www.litenova.solutions)
[![Engineering Standards](https://img.shields.io/badge/standards-v1.0.0-ffce63?style=flat-square)](https://www.litenova.solutions/Standards)
[![License](https://img.shields.io/github/license/Litenova-Solutions/Litenova.Solutions-Public-Site?style=flat-square)](LICENSE)

This repository contains the Litenova Solutions company website and the public
Litenova Engineering Standards documentation. One Next.js application serves
both surfaces on Vercel:

- Company pages at `/`, `/about`, `/services`, `/open-source`, and `/contact`.
- Engineering Standards v1 at `/Standards` using Fumadocs.
- Privacy and accessibility information at `/privacy` and `/accessibility`.
- Search-engine and agent discovery through `sitemap.xml`, `robots.txt`,
  `llms.txt`, and `llms-full.txt`.

The canonical origin is [www.litenova.solutions](https://www.litenova.solutions).
The apex domain redirects to the `www` origin.

## Standards baseline

Normative content comes from the
[Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards)
Git submodule. The submodule is pinned to the published `v1.0.0` tag at commit
`ca022abebd1d74d7b73c2c2e159f71418ec2a00c`. It does not follow the standards
repository default branch.

The build stages that content into `.standards-src`, adds site navigation
metadata, rewrites internal links, and generates the two `llms` files. Generated
content is not committed.

## Repository layout

| Path | Responsibility |
| --- | --- |
| `app/(site)/` | Company, legal, and accessibility routes |
| `app/Standards/` | Fumadocs layout, pages, and static search endpoint |
| `components/marketing/` | Reusable company-site sections |
| `components/standards/` | Standards landing and documentation footer |
| `engineering-standards/` | Pinned standards submodule; do not edit here |
| `standards-overrides/` | Site-owned navigation metadata and standards landing copy |
| `scripts/stage-standards-docs.mjs` | Deterministic standards staging and link validation |
| `scripts/validate-site.mjs` | Release, metadata, text, and security validation |
| `tests/e2e/` | Critical browser and accessibility journeys |
| `docs/MAINTAINER.md` | Content, release, and deployment runbook |

## Toolchain

Use the versions selected by Engineering Standards v1:

- Node.js 24.16.0, recorded in `.node-version`.
- pnpm 11.13.1, recorded in `package.json`.
- Next.js 16.2.10 and React 19.2.7.
- TypeScript 6.0.3 and Tailwind CSS 4.3.3.

The package declares a compatible Node.js 24 engine range so local patch
updates remain usable. CI uses the exact preferred version.

## Local development

```bash
git clone --recurse-submodules git@github.com:Litenova-Solutions/Litenova.Solutions-Public-Site.git
cd Litenova.Solutions-Public-Site
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

If the repository was cloned without submodules, run:

```bash
git submodule update --init --recursive
```

Open `http://localhost:3000` for the company site and
`http://localhost:3000/Standards` for the documentation. Documentation search
is available from the Fumadocs navigation or with `Ctrl+K`.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Stage standards and start the development server |
| `pnpm run content:stage` | Refresh generated standards and agent discovery files |
| `pnpm lint` | Run ESLint with zero warnings allowed |
| `pnpm type-check` | Stage content and run the TypeScript compiler |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm validate` | Validate the release pin, content, metadata, and source rules |
| `pnpm build` | Stage content and create a production Next.js build |
| `pnpm test:e2e` | Run Playwright journeys against the production build |
| `pnpm check` | Run every non-browser release check |

Install the Chromium browser once before local end-to-end testing:

```bash
pnpm exec playwright install chromium
pnpm build
pnpm test:e2e
```

## Deployment

Vercel Git integration builds every branch and pull request as a preview.
Updates to `main` create production deployments for
`www.litenova.solutions`. The connected Vercel project uses:

| Setting | Value |
| --- | --- |
| Project | `litenova-solutions-public-site` |
| Root Directory | Repository root |
| Framework | Next.js |
| Node.js | 24.x |
| Package installation | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build` |
| Production branch | `main` |
| Canonical domain | `www.litenova.solutions` |

Git submodules must remain enabled. Do not deploy a local worktree that has not
passed `pnpm check`, `pnpm test:e2e`, and `git diff --check`.

See [the maintainer runbook](docs/MAINTAINER.md) for the complete preview and
production verification sequence.

## Contributions and security

Site code and presentation changes belong in this repository. Normative
standards changes belong in the Engineering-Standards repository and require an
intentional release-pin update here.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Report
security issues through [SECURITY.md](SECURITY.md), not a public issue.

The site code is available under the [MIT License](LICENSE). The Litenova name
and marks are covered by [TRADEMARK.md](TRADEMARK.md).
