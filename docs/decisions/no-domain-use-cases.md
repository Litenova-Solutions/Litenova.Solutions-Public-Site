---
{
  "kind": "decision",
  "id": "no-domain-use-cases",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-08-26"
}
---

# No Domain Use Cases

## Context

`FRONTEND.UI.PAGE.001` requires a non-trivial React web page to carry `kind: page` metadata and a sidecar contract. The `page` metadata kind requires a non-empty `useCases` list, and each entry must resolve to a use-case specification under `docs/domain/modules`.

This repository has no domain modules. Its pages present static content and accept no input. See [No backend solution](no-backend-solution.md).

## Decision

The project records no `kind: page` specifications, and therefore no page sidecars.

Creating a domain module, an aggregate, and a use case so that a static landing page could name a `useCases` entry would invent a domain model to satisfy a metadata field. `CORE.PRINCIPLES.COMPLEXITY.001` rejects that structure.

## What Replaces The Page Contract

The composition facts that a page sidecar would carry are recorded in the UI vocabulary at `docs/ui/web/vocabulary.json`, which is schema-validated on every run of the UI validator:

- `shells` records the marketing shell and its regions.
- `patterns` records each page region, its components, its states, and its evidence.
- `states` records the states every pattern must prove.
- `evidence` records the browser and accessibility results that cover them.

Focus order, landmark structure, and heading structure are asserted directly by the Playwright suite in `tests/e2e` rather than described in a sidecar.

## Consequences

The vocabulary carries the composition contract. A future page that accepts input, calls a service, or renders per-user state reverses this decision, because such a page has a real use case to name.

## Review

Review this decision by 2027-02-26, or sooner if the site gains a page with domain behavior.
