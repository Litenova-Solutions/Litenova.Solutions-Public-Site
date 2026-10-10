---
{
  "kind": "decision",
  "id": "single-root-ui-package",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-10-10"
}
---

# Single-Root UI Package

## Context

`standards/rule/frontend-components.compose-composites-in-page-code` forbids application code from importing the primitive library directly. The rule assumes the workspace separates the shared package from the applications that compose it. The reference check therefore reads every import under the frontend root as application code.

This repository is one Next.js application. The shared UI package and the web frontend share the repository root. Both `paths.uiPackage.path` and the frontend `path` are `.`, and the installed primitives live at `components/ui` inside that root. The generated primitive source imports `@base-ui/react` directly in three files: `button.tsx`, `badge.tsx`, and `separator.tsx`. No file outside `components/ui` imports the primitive library.

## Decision

The project keeps the single-root layout. The `standards/rule/frontend-components.compose-composites-in-page-code` override in `standards.project.json` waives the three direct primitive-library imports inside `components/ui`. An import of the primitive library from any other directory is a real violation and fails the gate.

## Alternatives Considered

Splitting the repository into `packages/ui` and `apps/web` would satisfy the rule structurally. That move rewrites every import alias, the Next.js deployment configuration, and the Cloudflare Workers build for no product need. `standards/rule/core-principles.require-current-complexity-activation` rejects that structure.

## Consequences

The primitive boundary is enforced by directory: `components/ui` holds generated source that may import `@base-ui/react`, and application code composes those primitives without touching the library. The import check still runs on every file, so a new direct import outside `components/ui` reports.

## Review

Review this decision by 2027-04-10, or sooner if the repository adopts a multi-application workspace.
