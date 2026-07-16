# Maintainer Runbook

This runbook covers the company site and Engineering Standards documentation
served from one Next.js application.

## Content ownership

The `engineering-standards` submodule is the normative source. It is pinned to
the released `v1.0.0` commit. Never change files inside the submodule from this
repository.

Site-owned content lives in these locations:

- Company pages: `app/(site)` and `components/marketing`.
- Shared company facts and canonical origin: `lib/site.ts`.
- Product and open-source facts: `lib/projects.ts`.
- Standards landing copy: `standards-overrides/index.md`.
- Standards navigation: nested `meta.json` files in `standards-overrides`.
- Crawl endpoints: `app/robots.ts`, `app/sitemap.ts`, and `app/manifest.ts`.
- Legal and access information: `app/(site)/privacy` and
  `app/(site)/accessibility`.

`.standards-src`, `.source`, `public/llms.txt`, and `public/llms-full.txt` are
generated. Do not edit or commit them.

## Standards staging

Run:

```bash
pnpm run content:stage
```

The staging script performs these operations:

1. Copies `engineering-standards/docs` into `.standards-src`.
2. Adds templates, the roadmap, release notes, and the project configuration
   reference from the v1 release.
3. Overlays site-owned sidebar metadata and landing copy.
4. Derives missing page metadata and removes duplicate first headings.
5. Rewrites relative standards links to public `/Standards` routes.
6. Fails if an internal standards link targets a route that was not staged.
7. Generates compact and complete `llms` indexes with canonical URLs.

The Fumadocs source configuration reads only the generated directory. Search is
a static Fumadocs index served at `/Standards/api/search`.

## Updating the standards release

Version 1 is intentionally pinned. Change it only when a new standards release
has been accepted for publication.

```bash
git -C engineering-standards fetch origin tag v1.0.0 --force
git -C engineering-standards checkout --detach v1.0.0
pnpm validate
```

For a future release, replace the tag in the commands and update all version
references, navigation, compatibility redirects, tests, and validation rules in
the same pull request. Confirm the tag object against the remote before
committing the submodule pointer.

## Company content changes

Keep facts such as the address, KVK number, phone number, canonical origin, and
public accounts in `lib/site.ts`. Do not duplicate a changed value across page
components. Keep product URLs and maturity labels in `lib/projects.ts`.

When a change affects personal-data handling, hosting, analytics, contact
collection, or subprocessors, update the privacy page in the same change. When
navigation or interaction changes, review the accessibility statement and the
Playwright accessibility journeys.

## Search and social visibility

Before release, confirm:

- Every public page has a unique title, description, and canonical URL.
- The sitemap contains company pages and all staged standards pages.
- `robots.txt` allows public pages and identifies the sitemap.
- Open Graph and Twitter metadata resolve to `/opengraph-image`.
- Organization, website, page, breadcrumb, and technical-article structured data
  matches the visible content.
- The apex domain redirects to the canonical `www` origin.
- Removed high-value standards routes have a permanent redirect.
- Search-console ownership is managed through DNS or deployment configuration,
  not an undocumented source edit.

## Verification

Use the preferred Node.js and pnpm versions, then run:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm exec playwright install chromium
pnpm test:e2e
git diff --check
```

The Playwright suite starts the production server after `pnpm build`. Review the
home, services, standards landing, adoption guide, privacy page, mobile menu,
keyboard focus, and at least one narrow viewport. Automated accessibility scans
are a gate, not a replacement for keyboard and visual review.

## Vercel deployment

The connected project is `litenova-solutions-public-site` in the Litenova
Solutions Vercel team. Its repository root is the application root, its
framework is Next.js, and its Node.js setting is 24.x. `main` is the production
branch. Git submodules must be enabled.

For a branch release:

1. Commit the verified worktree and push the branch.
2. Wait for GitHub CI and the Vercel preview to finish.
3. Open the preview and repeat the critical company, standards, mobile, and
   accessibility journeys.
4. Inspect deployment logs for content-staging, framework, or crawl-route
   warnings.
5. Review the preview source for canonical URLs. Preview pages deliberately keep
   the production canonical origin.
6. Merge only after review. Vercel then creates the production deployment.
7. Verify `https://www.litenova.solutions`, `/Standards`, `/robots.txt`,
   `/sitemap.xml`, and `/opengraph-image` on the production deployment.
8. Confirm the apex redirect and security response headers.

If production verification fails, use the Vercel dashboard to restore the last
known good production deployment and keep the failed commit available for
diagnosis. Do not move the standards tag or mutate a released submodule commit.
