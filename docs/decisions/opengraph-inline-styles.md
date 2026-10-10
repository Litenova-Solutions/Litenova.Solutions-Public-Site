---
{
  "kind": "decision",
  "id": "opengraph-inline-styles",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-10-10"
}
---

# Opengraph Inline Styles

## Context

`standards/rule/frontend-ui.restrict-css-decisions` forbids inline styles in application code. A style belongs in a shared component.

`app/opengraph-image.tsx` renders the social preview PNG through `ImageResponse` from `next/og`. That API accepts only inline style objects. It reads no stylesheet, no token, and no shared component.

## Decision

The project keeps inline styles in `app/opengraph-image.tsx`. The `standards/rule/frontend-ui.restrict-css-decisions` override in `standards.project.json` waives that one file. An inline style in any other application file fails the gate.

## Alternatives Considered

Serving a static PNG would remove the file. That trades generated code for a binary asset that drifts from the brand silently.

## Consequences

The social preview keeps rendering from code. The inline-style check still runs on every other application file.

## Review

Review this decision by 2027-04-10, or sooner if the site stops generating its social preview from code.
