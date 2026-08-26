# Litenova Solutions Public Site Agent Protocol

Read this file before changing the company site or its Engineering Standards presentation. The repository publishes one Next.js application through Cloudflare Workers. It contains a single company landing page and the released Engineering Standards documentation rendered with Fumadocs.

## Standards Conformance

This repository is a consumer of the Litenova Engineering Standards. `standards.project.json` records the profile, the reviewed release, the frontend, and every override.

- The standards release is a Git submodule at `standards/`, pinned to an accepted release tag. Do not edit files inside it and do not point it at a branch.
- Advancing the submodule is a deliberate act. It changes the published taxonomy, the manifest version pins, and the provisions that apply. Update `reviewedStandardsVersion`, the navigation overrides, the redirect map, and `package.json` in the same change.
- `standards/standards.manifest.json` is the authority for tool and package versions. `scripts/validate-site.mjs` fails when `package.json` drifts from it.
- Use `standards-overrides` only for site-owned landing copy and navigation metadata.
- Treat `.standards-src`, `.source`, `standards-splash/body.md`, `public/llms.txt`, and `public/llms-full.txt` as generated output. Do not edit or commit them.

### Recorded Overrides

Two provisions are recorded as overrides in `standards.project.json`, each with a decision and a review date:

- `FRONTEND.UI.GOVERNANCE.001`, for the Fumadocs documentation surface. See `docs/decisions/documentation-visual-system.md`.
- `FRONTEND.UI.PAGE.001`, because the site has no domain use cases. See `docs/decisions/no-domain-use-cases.md`.

`pnpm standards` runs the reference validator unmodified and waives only the exact problems those overrides cover, printing each waiver. Anything else fails. Do not widen a waiver to make a change pass; either satisfy the provision or record a new decision.

## Controlled UI Baseline

The company surface is built on the pinned shadcn/ui baseline: Base UI components, the Vega style, Geist through `next/font`, Lucide icons, and CSS variables on the neutral base color.

- `components/ui` holds generated primitive source. Do not hand-edit it. Reinstall through the pinned CLI, run `pnpm format`, then regenerate the digests in `ui-source-lock.json`.
- Compose new surfaces from those primitives and the wrappers in `components/marketing/Section.tsx` before adding anything new.
- Use semantic tokens only. `bg-card`, `text-muted-foreground`, and `border-border` are correct. A raw palette value such as `text-gray-400`, an arbitrary value such as `h-[36rem]`, and an important modifier are rejected by the UI validator.
- `app/global.css` is the only stylesheet. A repeated background or long-form prose treatment belongs in a Tailwind `@utility` in that file, not in a class selector.
- Record a new primitive, pattern, shell, state, or evidence entry in `docs/ui/web/vocabulary.json`.
- Litenova gold is `--primary`. Change the brand in the `.dark` block of `app/global.css` and every surface follows.

## Product and Source Boundaries

- Keep the company surface as one landing page at `/`. Services, standards, products, and contact information are sections of that page.
- Keep the privacy notice and accessibility statement as footer reference pages. They are not marketing pages.
- Serve Engineering Standards under `/Standards`. Normative content comes from the submodule.
- Do not add another company marketing route without an explicit information-architecture decision. A removed route keeps a permanent redirect to the relevant landing-page anchor.
- A standards release that renames a page requires a redirect entry in `next.config.ts`. `scripts/validate-site.mjs` fails when a redirect points at a route that no longer exists.

## Content and Tone

Write for senior software engineers, technical leaders, and Engineering Standards adopters. Do not write for buyers or frame the site as a sales funnel.

- Use a neutral, direct, technical documentation tone.
- State the mechanism, capability, scope, or constraint. Prefer specific facts over broad claims.
- Use noun-phrase headlines such as `Engineering Standards v1.15.0` and `Distributed .NET Systems`.
- Use title case for site-owned headings, navigation labels, buttons, card titles, metadata titles, and footer links. Use sentence case for paragraphs and descriptions.
- Keep calls to action descriptive. Use labels such as `Read Engineering Standards` and `Source Repository` rather than promotional imperatives.
- Name evidence for performance, quality, security, or compatibility claims. Remove a claim when the repository has no source that supports it.
- State material limitations and maturity labels directly. `In Development` is clearer than a vague availability statement.
- Describe AI-assisted engineering as a bounded engineering method. Do not imply autonomous delivery, guaranteed outcomes, or replacement of technical judgment.
- Keep contact copy factual. State the address, email, phone number, and expected subject matter without a sales pitch.
- Preserve the wording and casing of normative standards content unless the requested work belongs in the Engineering Standards repository.

Do not use slogans, superlatives, hype, urgency, rhetorical questions, sales cadence, or vague future claims. Avoid stock phrases about transformation, acceleration, partnership, unlocking value, or changing the future. Do not anthropomorphize code, tools, standards, or organizations.

Source text is ASCII. `scripts/validate-site.mjs` fails on a non-ASCII character in a tracked source file.

## Visual Presentation

- Preserve the centered landing-page hero. Do not split the hero into left and right columns or add a promotional panel beside it.
- Keep the presentation restrained and minimal: dark neutral surfaces, subtle borders, limited gold accents, and clear spacing.
- Use cards only when they clarify separate technical subjects. Do not wrap ordinary copy in a decorative box.
- Keep motion brief and nonessential. Respect `prefers-reduced-motion`.
- Reuse the existing logo, typography, spacing, button, and surface patterns before adding a new visual treatment.

## Shared Facts and Public Metadata

- Keep shared company facts, canonical URLs, and public accounts in `lib/site.ts`.
- Keep project URLs and maturity labels in `lib/projects.ts`.
- Read the standards version from `lib/standards.ts`. Do not hardcode a release number in a component, a test, or a page.
- Update visible copy, metadata, structured data, sitemap entries, redirects, tests, and agent discovery files as one unit when a public route or title changes.
- Every public page needs a unique title, description, canonical URL, keyboard access, and valid document structure.
- Preserve the canonical `https://www.litenova.solutions` origin. A preview deployment must not replace it in public metadata.

## Before Editing

1. Run `git status -sb` and preserve unrelated work.
2. Inspect the nearest components, tests, and shared facts before changing public content.
3. Check `package.json`, `.node-version`, and `standards/standards.manifest.json` before changing a tool or dependency version.
4. Confirm whether the requested work affects the company site, standards presentation, normative standards content, or deployment configuration.
5. Plan code, content, metadata, accessibility, redirects, tests, and operating impact together.

Do not add a dependency, analytics service, form processor, cookie, or other external side effect unless the request explicitly authorizes it. A change to personal-data handling also requires a privacy-notice review.

Dependency updates are maintained manually and follow the standards manifest. Do not add Dependabot, Renovate, or another automated dependency pull-request service without an explicit repository decision. For a manual update, review `pnpm outdated` against the manifest, run `pnpm peers check`, and commit the resulting `pnpm-lock.yaml` update with its verification.

## Verification

For every site change, run:

```bash
pnpm check
pnpm test:e2e
git diff --check
```

`pnpm check` runs formatting, linting, type checking, unit tests, standards conformance, site validation, and the production build. The Playwright suite verifies critical routes, narrow viewports, keyboard behavior, metadata, redirects, and automated accessibility checks at desktop and mobile widths.

For a visual change, capture screenshots with `CAPTURE_SCREENSHOTS=true pnpm test:e2e --project=desktop-chromium` and inspect the landing page and Standards page at both widths. Confirm title case, visible focus, contrast, reduced-motion behavior, anchor navigation, and the absence of horizontal overflow.

## Completion

- Report the exact checks and outcomes.
- Include desktop and mobile screenshots for a pull request that changes presentation.
- Keep the Cloudflare Workers preview available for review before merging to `main`.
- Leave no placeholder copy, unfinished-work marker, disabled verification, widened waiver, or untracked generated output.
- Update `README.md` or `docs/MAINTAINER.md` when the setup, release, content ownership, or deployment process changes.
