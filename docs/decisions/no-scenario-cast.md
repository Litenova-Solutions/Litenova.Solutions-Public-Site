---
{
  "kind": "decision",
  "id": "no-scenario-cast",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-10-10"
}
---

# No Scenario Cast

## Context

`standards/rule/core-system.derive-every-scenario-from-one-reference-cast` requires a consumer to record one `scenario-cast` specification. Every `Scenario` section in the documentation draws its people, place, dates, and amounts from that cast.

A `Scenario` section belongs to a module, aggregate, use-case, domain-policy, or end-to-end-flow specification. This repository records none of those kinds. See [No domain use cases](no-domain-use-cases.md).

## Decision

The project records no `scenario-cast` specification.

A cast with no `Scenario` section to serve would invent an organization, people, and occasions for a static site. `standards/rule/core-principles.require-current-complexity-activation` rejects that structure.

## Consequences

The consumer validator reports a missing cast. The `standards/rule/core-system.derive-every-scenario-from-one-reference-cast` override in `standards.project.json` waives that exact problem.

A future behavior specification reverses this decision, because its `Scenario` section needs a cast to draw from.

## Review

Review this decision by 2027-04-10, or sooner if the site gains a behavior specification.
