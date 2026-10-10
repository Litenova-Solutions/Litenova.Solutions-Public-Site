---
{
  "kind": "design-contract",
  "schemaVersion": 1,
  "package": "@litenova-solutions/ui",
  "profile": "public-light",
  "shell": "marketing-shell",
  "patterns": ["centered-landing", "reference-page"]
}
---

# Litenova Solutions Design Contract

This contract travels with the shared UI package. It states the brand, the
tokens, the vocabulary, and the floorplans that every route of the web
frontend composes from.

## Brand

Litenova Solutions presents one company surface and one documentation surface
from a single frontend. The site renders dark only: dark neutral surfaces,
subtle borders, limited gold accents, and clear spacing.

The brand color is the `--primary` token in the `.dark` block of
`app/global.css` (gold, `oklch(0.8742 0.1358 84.59)`). A brand change edits
that token and every surface follows. Typography is Geist through `next/font`.
Icons are Lucide.

## Tokens

`app/global.css` is the only stylesheet. It imports Tailwind, the animation
layer, and the two Fumadocs stylesheets the documentation surface resolves
inside this graph (see `docs/decisions/documentation-visual-system.md`).
A repeated background or long-form prose treatment belongs in a Tailwind
`@utility` in that file.

Routes and components use semantic tokens only: `bg-background`,
`bg-card`, `text-foreground`, `text-muted-foreground`, and `border-border`.
A raw palette value, an arbitrary value, and an important modifier are
rejected by the UI validator.

## Vocabulary

`docs/ui/web/vocabulary.json` is the closed component inventory. It records
the installed primitives (`button`, `card`, `badge`, `separator`), the
shells, the patterns each page region composes, the states every pattern
must prove, and the browser and accessibility evidence that covers them.
A new primitive, pattern, shell, state, or evidence entry is recorded there
before it is used.

## Patterns

Each route composes from one floorplan:

- `centered-landing`: the company landing page. A centered hero (logo mark,
  release line, headline, summary, actions) followed by full-width sections
  for services, standards, products, and contact. Use for the `/` route only.
- `reference-page`: a prose reference page inside the marketing shell. A
  page hero (title, effective date, summary) followed by titled sections.
  Use for `/privacy` and `/accessibility`.

The `/Standards` subtree is rendered by Fumadocs under the bounded second
system recorded in `docs/decisions/documentation-visual-system.md`. Its
sidebar, page tree, table of contents, search dialog, and Markdown
presentation are Fumadocs's, with the Fumadocs token namespace remapped onto
the baseline tokens in `app/global.css`.

## Do

- Compose company routes from `components/ui` primitives and the section
  wrappers in `components/marketing/Section.tsx`.
- Use noun-phrase headlines in title case, such as `Distributed .NET Systems`.
- Write descriptive calls to action, such as `Read Engineering Standards`.
- Use cards only when they clarify separate technical subjects.
- Keep keyboard access, visible focus, landmarks, and heading order on every
  route.

## Do not

- Do not wrap ordinary copy in a decorative box.
- Do not split the landing-page hero into columns or add a promotional panel
  beside it.
- Do not add a company marketing route without an information-architecture
  decision.
- Do not hand-edit generated primitive source in `components/ui`.
- Do not use slogans, superlatives, hype, urgency, or rhetorical questions.

## Motion

Motion is brief and nonessential. Transitions stay under 200 milliseconds
and never carry meaning on their own. Every animated surface respects
`prefers-reduced-motion`.

## Voice

Copy uses a neutral, direct, technical documentation tone for senior
software engineers and technical leaders. It states the mechanism,
capability, scope, or constraint with specific facts. Paragraphs and
descriptions use sentence case. Material limitations and maturity labels
are stated directly.
