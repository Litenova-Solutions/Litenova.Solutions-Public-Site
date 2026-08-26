---
{
  "kind": "decision",
  "id": "documentation-visual-system",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-08-26"
}
---

# Documentation Visual System

## Context

`FRONTEND.UI.GOVERNANCE.001` requires one recorded visual system per React web frontend, because a second general-purpose system makes every component choice ambiguous.

This repository renders two surfaces from one Next.js application. The company surface at `/` is composed from the pinned shadcn/ui baseline. The documentation surface at `/Standards` is rendered by Fumadocs, which supplies the documentation shell, the page tree, the table of contents, the search dialog, and the Markdown presentation.

Fumadocs is not a general-purpose component catalog. It is a documentation renderer, and it is the reason this repository can publish 79 standards pages without maintaining a documentation engine.

## Decision

The controlled shadcn/ui baseline is the primary visual system for this frontend. Fumadocs is a bounded second system, scoped to the `/Standards` route subtree.

The boundary is enforced by construction:

- The Fumadocs token namespace is remapped onto the baseline tokens in `app/global.css`, so both surfaces read one set of brand values and a brand change moves both.
- No Fumadocs component is used outside `app/Standards` and `components/standards`.
- The company surface composes only primitives from `components/ui` and Lucide icons.
- Every other controlled UI rule stays in force on both surfaces: the token and utility scan, the vocabulary, the source lock, the component boundary, and the vendor import rule.

## The Waived Rule

`FRONTEND.UI.TAILWIND.001` limits the global CSS entry to the imports that the generated shadcn entry writes. This repository adds two:

```css
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';
```

Both stylesheets express their rules with `@apply`, so they resolve only inside a CSS graph that has imported Tailwind. Importing them from `app/Standards/layout.tsx` was tried first. The bundler compiles a route-imported stylesheet on its own, and the build fails on the first `@apply` with `Cannot apply unknown utility class`. The global entry is therefore the only place these two imports work.

`scripts/validate-standards.mjs` runs the reference validator unmodified and waives exactly these two problems against this decision. It prints every waiver it applies and fails on anything else, so the waiver cannot widen without someone editing it.

## Alternatives Considered

Rebuilding the documentation shell on the shadcn/ui baseline would remove the second system. It would also require this repository to own a sidebar, a page tree, a table of contents, an anchor index, and a static search index. That is a documentation engine, and `CORE.PRINCIPLES.COMPLEXITY.001` rejects building one to satisfy a conformance rule.

Declaring the whole frontend as an alternate system would suspend the token, utility, and source rules on the company surface as well. That trades real enforcement for a simpler declaration.

## Consequences

The company surface stays under full controlled UI validation. The documentation surface is presented by Fumadocs and is verified by the browser and accessibility suites rather than by the UI source scan.

## Review

Review this decision by 2027-02-26, or sooner if Fumadocs components appear outside the documentation route, or if the documentation surface stops depending on the Fumadocs shell.
