---
{
  "kind": "decision",
  "id": "no-backend-solution",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-08-26"
}
---

# No Backend Solution

## Context

`standards/rule/core-scope.declare-a-consumer-that-has-no-backend` allows a consumer with no backend to omit `paths.apiSolution` and record the baseline rules that are left without a surface.

This repository publishes static content. Every route is prerendered and served from Cloudflare Workers static assets. There is no API, no database, no message transport, and no authenticated session.

## Decision

The project omits `paths.apiSolution`. The backend, persistence, and API areas of the pinned standards have no surface in this repository and are not evaluated against it.

Adding a backend solution to obtain conformance would contradict `standards/rule/core-principles.require-current-complexity-activation`, which permits added structure only for a current documented requirement.

## Baseline Rules Without A Surface

| Area                                                       | Reason                                                      |
| :--------------------------------------------------------- | :---------------------------------------------------------- |
| Backend rule pages                                       | No API solution, domain layer, or application layer exists. |
| Extension rule pages for persistence, outbox, and jobs   | No persistence, transport, or scheduler exists.             |
| `standards/rule/frontend-data.keep-the-session-*`, `quality-security.authorize-*` | The site holds no session and serves anonymous public content only. |

The frontend, workspace, quality, and operations areas of the pinned standards apply in full.

## Consequences

A future service in this repository reverses this decision. That change records `paths.apiSolution`, adds the backend specifications, and re-evaluates the rules listed above.

## Review

Review this decision when the repository gains a server-side capability that accepts input, stores data, or authenticates a caller.
