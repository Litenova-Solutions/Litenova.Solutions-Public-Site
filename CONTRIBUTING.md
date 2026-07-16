# Contributing to the Litenova Solutions Public Site

Thank you for contributing. This repository contains the company website and
the presentation layer for Litenova Engineering Standards.

Read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating. Report
security issues through [SECURITY.md](SECURITY.md), not a public issue.

## Choose the correct repository

| Change | Repository |
| --- | --- |
| Next.js routes, company copy, theme, navigation, staging, SEO, or tests | This repository |
| Normative standards, guides, decisions, templates, or release manifest | [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards) |

Do not make long-lived edits inside `engineering-standards`. It is a Git
submodule pinned to the published v1 release.

## Prerequisites

- Node.js 24.16.0.
- pnpm 11.13.1 through Corepack.
- Git with submodule support.
- Chromium installed through Playwright for browser checks.

## Setup

```bash
git clone --recurse-submodules git@github.com:Litenova-Solutions/Litenova.Solutions-Public-Site.git
cd Litenova.Solutions-Public-Site
corepack enable
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm dev
```

Open `http://localhost:3000` for the company site and
`http://localhost:3000/Standards` for the standards.

## Change workflow

1. Create a focused branch from `main`.
2. Preserve the standards submodule pin unless the change explicitly publishes
   another accepted standards release.
3. Keep shared company and project facts in `lib/site.ts` and `lib/projects.ts`.
4. Add or update tests for public routes, navigation, metadata, or behavior.
5. Run all required checks.
6. Open a pull request that explains the user-visible outcome, operating impact,
   verification evidence, and any intentionally skipped check.

Required checks:

```bash
pnpm check
pnpm test:e2e
git diff --check
```

`pnpm check` runs lint, type checking, unit tests, site validation, and the
production build. End-to-end tests assume that build already exists.

## Standards presentation changes

Use `standards-overrides` only for site navigation metadata and landing-page
presentation. Run `pnpm run content:stage` after each change. The generated
`.standards-src`, `.source`, and `public/llms*.txt` files must not be committed.

Normative content changes require a pull request in Engineering-Standards and a
new accepted release before this site's submodule pointer changes. Do not point
the public site at an unversioned default branch.

## Pull request expectations

A pull request should include:

- A concise statement of the problem and outcome.
- Screenshots for visual changes at desktop and narrow widths.
- Exact verification commands and results.
- Accessibility and search implications for public-page changes.
- A Vercel preview URL when the Git integration creates one.
- An explicit note for schema, dependency, hosting, or standards-pin changes.

Open a [GitHub issue](https://github.com/Litenova-Solutions/Litenova.Solutions-Public-Site/issues)
for a site bug or proposal that needs discussion.
