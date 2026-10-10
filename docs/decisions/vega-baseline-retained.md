---
{
  "kind": "decision",
  "id": "vega-baseline-retained",
  "specStatus": "approved",
  "owner": "Litenova Solutions",
  "lastReviewed": "2026-10-10"
}
---

# Vega Baseline Retained

## Context

`standards/rule/frontend-ui.pin-the-baseline-in-the-shared-package` requires the shared UI package to install the pinned Nova baseline: style `nova`, components style `base-nova`, installed through CLI `4.21.1`.

This repository installed its four primitives (`button`, `card`, `badge`, `separator`) from the Vega baseline through CLI `4.16.2`. The source lock at `ui-source-lock.json` records that install, and the registry configuration at `components.json` names `base-vega`.

The v1.17.0 release carries no preset code that the CLI resolves, so it describes no pinned reinstall path from Vega to Nova. Relabeling installed Vega source as Nova would falsify the lock without changing one line of source.

## Decision

The project retains its installed Vega primitive source. The `standards/rule/frontend-ui.pin-the-baseline-in-the-shared-package` override in `standards.project.json` waives four baseline label problems. They are the `style` value in `components.json`, the `preset.style` and `preset.componentsStyle` values in `ui-source-lock.json`, and the recorded CLI version.

The source lock digests stay in force. A hand edit to copied primitive source still reports, because the digest check reads file content rather than labels.

The reference UI validator cites these problems under `standards/rule/frontend-ui.install-the-pinned-baseline-in-the-shared-package`, an identifier the release provisions index does not carry. The provisions index names the rule `standards/rule/frontend-ui.pin-the-baseline-in-the-shared-package`. The waiver matches the emitted text; this decision records the provision the release actually ships.

## Alternatives Considered

Reinstalling the primitives as Nova through the pinned CLI would satisfy the rule. That replaces the visual system both surfaces share, which is a redesign decision with its own review, screenshots, and accessibility pass. It does not belong inside a release update.

## Consequences

Both surfaces keep the Vega visual system. The lock, the digests, and every other controlled UI rule stay in force.

## Review

Review this decision by 2027-04-10, or sooner if the shadcn registry publishes a pinned Nova install path or the site redesigns its visual system.
