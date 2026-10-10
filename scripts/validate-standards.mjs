// Runs the reference consumer validator from the pinned standards submodule and
// applies the waivers that standards.project.json records as overrides.
//
// The reference validator is run unmodified. It has no notion of an override for
// the checks it performs, so a consumer that records one still has to decide
// what its own gate does with the resulting error. This wrapper waives only the
// exact problems that a recorded override covers, prints every waiver it
// applied, and fails on anything else.
//
// A waiver whose override is missing, or whose review date has passed, is not
// applied. The problem then fails the gate, which is the point of the date.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const validator = path.join(
  root,
  'standards',
  'tools',
  'validate-consumer.mjs',
);
const project = JSON.parse(
  readFileSync(path.join(root, 'standards.project.json'), 'utf8'),
);

// Each waiver names the override that authorizes it and matches one exact
// problem. A broad pattern would hide a real defect, so every entry is anchored
// to the file and the message the validator emits.
const waivers = [
  {
    provisionId: 'standards/rule/frontend-ui.select-one-visual-authority',
    reason:
      'The Fumadocs stylesheets apply Tailwind utilities and only resolve inside the global CSS graph.',
    matches: (problem) =>
      /^\[standards\/rule\/frontend-ui\.restrict-css-decisions\] app\/global\.css: import 'fumadocs-ui\/css\/(?:neutral|preset)\.css' is outside the approved global CSS surface$/.test(
        problem,
      ),
  },
  {
    provisionId: 'standards/rule/frontend-ui.restrict-css-decisions',
    reason:
      'The next/og ImageResponse API accepts only inline style objects; it reads no stylesheet or shared component.',
    matches: (problem) =>
      /^\[standards\/rule\/frontend-ui\.restrict-css-decisions\] app\/opengraph-image\.tsx: an inline style belongs in a shared component$/.test(
        problem,
      ),
  },
  {
    // The reference UI validator cites these problems under
    // install-the-pinned-baseline-in-the-shared-package, an identifier the
    // release provisions index does not carry. The waiver matches the emitted
    // text; the override records the provision the release actually ships.
    provisionId:
      'standards/rule/frontend-ui.pin-the-baseline-in-the-shared-package',
    reason:
      'The installed primitive source is the Vega baseline and the release describes no pinned reinstall path to Nova; the source lock digests still guard the installed files.',
    matches: (problem) =>
      /^\[standards\/rule\/frontend-ui\.install-the-pinned-baseline-in-the-shared-package\] components\.json: style must be "base-nova"$/.test(
        problem,
      ) ||
      /^\[standards\/rule\/frontend-ui\.install-the-pinned-baseline-in-the-shared-package\] ui-source-lock\.json: preset\.(?:style|componentsStyle) does not match the manifest baseline$/.test(
        problem,
      ) ||
      /^ui-source-lock\.json: cli must match manifest shadcn pin '4\.21\.1'$/.test(
        problem,
      ),
  },
  {
    provisionId:
      'standards/rule/frontend-components.compose-composites-in-page-code',
    reason:
      'The shared package and the frontend share one root, so the generated primitives inside components/ui read as application code to the import scan.',
    matches: (problem) =>
      /^\[standards\/rule\/frontend-components\.compose-composites-in-page-code\] components\/ui\/(?:button|badge|separator)\.tsx: imports the primitive library directly; import the shared package's component from shared package '@litenova-solutions\/ui'$/.test(
        problem,
      ),
  },
  {
    provisionId:
      'standards/rule/core-system.derive-every-scenario-from-one-reference-cast',
    reason:
      'The site records no behavior specifications, so a scenario cast would invent an organization and occasions that nothing cites.',
    matches: (problem) =>
      /^Expected exactly one scenario-cast specification, found 0$/.test(
        problem,
      ),
  },
];

const today = new Date().toISOString().slice(0, 10);
const overrides = new Map(
  (project.overrides ?? []).map((override) => [override.provisionId, override]),
);

const result = spawnSync(process.execPath, [validator, root], {
  encoding: 'utf8',
});
const output = `${result.stdout ?? ''}${result.stderr ?? ''}`;
process.stdout.write(output);

if (result.status === 0) {
  console.log('\nStandards conformance: PASS with no waiver applied.');
  process.exit(0);
}

const problems = output
  .split('\n')
  .filter((line) => line.trimStart().startsWith('- '))
  .map((line) => line.trim().slice(2).trim());

if (problems.length === 0) {
  console.error(
    '\nStandards conformance: the validator failed without reporting a problem list.',
  );
  process.exit(1);
}

const applied = [];
const remaining = [];

for (const problem of problems) {
  // 'controlled UI validation failed' is the parent validator restating the UI
  // validator result. It is resolved by whether the UI problems are all waived.
  if (problem.startsWith('controlled UI validation failed')) continue;

  // The consumer validator lifts each UI problem into its own list with a
  // 'controlled UI: ' prefix and also prints the raw UI output, so every UI
  // problem arrives twice. Matching runs against the unprefixed text, which is
  // the exact problem the reference UI validator emitted.
  const matchable = problem.startsWith('controlled UI: ')
    ? problem.slice('controlled UI: '.length)
    : problem;

  const waiver = waivers.find((candidate) => candidate.matches(matchable));
  const override = waiver ? overrides.get(waiver.provisionId) : undefined;

  if (!waiver) {
    remaining.push(problem);
    continue;
  }
  if (!override) {
    remaining.push(
      `${problem} (no ${waiver.provisionId} override is recorded)`,
    );
    continue;
  }
  if (override.reviewBy && override.reviewBy < today) {
    remaining.push(
      `${problem} (the ${waiver.provisionId} override was due for review on ${override.reviewBy})`,
    );
    continue;
  }
  applied.push({ problem, waiver, override });
}

if (applied.length > 0) {
  console.log(
    `\nWaived ${applied.length} problem(s) under recorded overrides:`,
  );
  for (const { problem, waiver, override } of applied) {
    console.log(`  - ${problem}`);
    console.log(
      `    ${waiver.provisionId}, decision ${override.decision}, review by ${override.reviewBy}`,
    );
    console.log(`    ${waiver.reason}`);
  }
}

if (remaining.length > 0) {
  console.error(
    `\nStandards conformance: FAIL (${remaining.length} problem(s)):`,
  );
  for (const problem of remaining) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log('\nStandards conformance: PASS with every other check satisfied.');
