# Litenova Solutions Public Site Agent Protocol

Read this file before changing the company site or its Engineering Standards presentation.
The repository publishes one Next.js application through Cloudflare Workers. It contains a single company
landing page and the released Engineering Standards documentation rendered with Fumadocs.

## Product and Source Boundaries

- Keep the company surface as one landing page at `/`. Services, standards, projects, and
  contact information are sections of that page.
- Keep the privacy notice and accessibility statement as footer reference pages. They are not
  marketing pages.
- Serve Engineering Standards under `/Standards`. Normative standards content comes from the
  `engineering-standards` Git submodule.
- Keep the standards submodule pinned to an accepted release tag. Do not edit files inside the
  submodule from this repository or point it at an unversioned branch.
- Use `standards-overrides` only for site-owned landing copy and navigation metadata.
- Treat `.standards-src`, `.source`, `standards-splash/body.md`, `public/llms.txt`, and
  `public/llms-full.txt` as generated output. Do not edit or commit them.

## Content and Tone

Write for senior software engineers, technical leaders, and Engineering Standards adopters.
Do not write for buyers or frame the site as a sales funnel.

- Use a neutral, direct, technical documentation tone.
- State the mechanism, capability, scope, or constraint. Prefer specific facts over broad
  claims.
- Use noun-phrase headlines such as `Engineering Standards v1` and `Distributed .NET Systems`.
- Use title case for site-owned headings, navigation labels, buttons, card titles, metadata
  titles, and footer links. Use sentence case for paragraphs and descriptions.
- Keep calls to action descriptive. Use labels such as `Read Engineering Standards` and
  `Source Repository` rather than promotional imperatives.
- Name evidence for performance, quality, security, or compatibility claims. Remove a claim
  when the repository has no source that supports it.
- State material limitations and maturity labels directly. `In Development` is clearer than a
  vague availability statement.
- Describe AI-assisted engineering as a bounded engineering method. Do not imply autonomous
  delivery, guaranteed outcomes, or replacement of technical judgment.
- Keep contact copy factual. State the address, email, phone number, and expected subject matter
  without a sales pitch.
- Preserve the wording and casing of normative standards content unless the requested work
  belongs in the Engineering Standards repository.

Do not use slogans, superlatives, hype, urgency, rhetorical questions, sales cadence, or vague
future claims. Avoid stock phrases about transformation, acceleration, partnership, unlocking
value, or changing the future. Do not anthropomorphize code, tools, standards, or organizations.

## Visual Presentation

- Preserve the centered landing-page hero. Do not split the hero into left and right columns or
  add a promotional panel beside it.
- Keep the presentation restrained and minimal: dark neutral surfaces, subtle borders, limited
  gold accents, light glass treatment, and clear spacing.
- Use cards only when they clarify separate technical subjects. Do not wrap ordinary copy in
  decorative boxes.
- Keep motion brief and nonessential. Respect `prefers-reduced-motion`.
- Reuse the existing logo, typography, spacing, button, and surface patterns before adding a new
  visual treatment.
- Do not add another company marketing route without an explicit information-architecture
  decision. Removed routes must retain permanent redirects to the relevant landing-page anchor.

## Shared Facts and Public Metadata

- Keep shared company facts, canonical URLs, and public accounts in `lib/site.ts`.
- Keep project URLs and maturity labels in `lib/projects.ts`.
- Update visible copy, metadata, structured data, sitemap entries, redirects, tests, and agent
  discovery files as one unit when a public route or title changes.
- Every public page needs a unique title, description, canonical URL, keyboard access, and valid
  document structure.
- Preserve the canonical `https://www.litenova.solutions` origin. Preview deployments must not
  replace it in public metadata.

## Before Editing

1. Run `git status -sb` and preserve unrelated work.
2. Inspect the nearest components, tests, and shared facts before changing public content.
3. Check `package.json`, `.node-version`, and the standards manifest before changing a tool or
   dependency version.
4. Confirm whether the requested work affects the company site, standards presentation,
   normative standards content, or deployment configuration.
5. Plan code, content, metadata, accessibility, redirects, tests, and operating impact together.

Do not add a dependency, analytics service, form processor, cookie, or other external side
effect unless the request explicitly authorizes it. A change to personal-data handling also
requires a privacy-notice review.

Dependency updates are maintained manually. Do not add Dependabot, Renovate, or another
automated dependency pull-request service without an explicit repository decision. For a manual
update, review `pnpm outdated`, keep runtime type packages aligned with the selected runtime, run
`pnpm peers check`, and commit the resulting `pnpm-lock.yaml` update with its verification.

## Verification

For every site change, run:

```bash
pnpm check
pnpm test:e2e
git diff --check
```

`pnpm check` runs linting, type checking, unit tests, site validation, and the production build.
The Playwright suite verifies critical routes, narrow viewports, keyboard behavior, metadata,
and automated accessibility checks.

For a visual change, inspect the landing page and Standards page at desktop and mobile widths.
Confirm title case, visible focus, contrast, reduced-motion behavior, anchor navigation, and the
absence of horizontal overflow.

## Completion

- Report the exact checks and outcomes.
- Include desktop and mobile screenshots for a pull request that changes presentation.
- Keep the Cloudflare Workers preview available for review before merging to `main`.
- Leave no placeholder copy, unfinished-work marker, disabled verification, or untracked
  generated output.
- Update `README.md` or `docs/MAINTAINER.md` when the setup, release, content ownership, or
  deployment process changes.
