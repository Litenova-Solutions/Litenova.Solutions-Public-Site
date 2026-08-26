---
{
  "kind": "product",
  "id": "litenova-solutions-public-site",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-08-26"
}
---

# Litenova Solutions Public Site

## Intent

This repository publishes two public surfaces from one Next.js application. The company surface is a single landing page describing engineering services, products, and contact details. The documentation surface publishes the released Engineering Standards under `/Standards`.

The application is deployed to Cloudflare Workers. It stores no personal data, runs no form processor, and calls no third-party service at request time.

## Scope

| Surface                 | Route            | Content owner                  |
| :---------------------- | :--------------- | :----------------------------- |
| Company landing page    | `/`              | This repository                |
| Privacy notice          | `/privacy`       | This repository                |
| Accessibility statement | `/accessibility` | This repository                |
| Engineering Standards   | `/Standards`     | The pinned standards submodule |

Normative standards text comes from the `standards` submodule at its pinned release tag. This repository owns navigation metadata and landing copy for that surface, and owns nothing inside the submodule.

## Boundaries

The site has no backend solution, no domain modules, and no persisted state. The decisions that record those positions are listed below.

- [No backend solution](decisions/no-backend-solution.md)
- [No domain use cases](decisions/no-domain-use-cases.md)
- [Documentation visual system](decisions/documentation-visual-system.md)

## Verification

`pnpm check` runs linting, formatting, type checking, unit tests, standards conformance, site validation, and the production build. `pnpm test:e2e` runs the browser suite, including automated accessibility checks at desktop and mobile widths.
