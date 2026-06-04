---
title: Engineering Standards
description: Public engineering standards for Litenova Solutions — architecture, conventions, guides, and decisions for .NET and Next.js systems.
template: splash
editUrl: false
hero:
  title: Engineering Standards
  tagline: How we design, build, and operate software at Litenova Solutions — published openly for clients, contributors, and anyone evaluating our approach.
  image:
    file: /logo.png
    alt: Litenova Solutions
  actions:
    - text: Start with onboarding
      link: /guides/onboarding
      icon: right-arrow
      variant: primary
    - text: Browse the doc map
      link: /readme
      icon: right-arrow
      variant: minimal
    - text: View source on GitHub
      link: https://github.com/Litenova-Solutions/Engineering-Standards
      icon: external
      variant: minimal
---

## Where you are

You are on the **public standards site** hosted at [litenova.solutions/Standards/](https://litenova.solutions/Standards/). It is a read-only mirror of our [Engineering Standards](https://github.com/Litenova-Solutions/Engineering-Standards) repository: the same markdown our teams use internally, formatted for the web.

This is not the main [Litenova marketing site](/). Use the sidebar or search to move within the standards. The link at the top of the sidebar returns to [litenova.solutions](https://litenova.solutions).

## What to expect

These documents are **normative** where they say MUST or MUST NOT: they describe how we structure solutions, write APIs, test, secure, and deploy. Some sections are written with AI-assisted workflows in mind; they are still useful for human readers and explain *why* rules exist, not only checklists.

| If you want to… | Start here |
| :--- | :--- |
| Join a project that uses these standards | [Onboarding](/guides/onboarding) |
| See the full map of topics | [Documentation map](/readme) |
| Understand architectural intent | [Philosophy](/philosophy) · [Clean architecture](/architecture/clean-architecture) |
| Look up a term (ADDD, use case, tiers, etc.) | [Glossary](/glossary) |
| Implement a feature end to end | [ADDD overview](/guides/agentic-domain-driven-design) · [Add a use case](/guides/add-new-use-case) |
| Copy starter files (CI, Docker, domain docs) | [Templates](/templates/readme) |
| See full reference implementations | [Blueprints](/blueprints/readme) |
| Understand why we chose a technology or pattern | [Decisions (ADRs)](/decisions/readme) |
| Operate production systems | [Runbooks](/runbooks/readme) |

## How the docs are organized

- **Guides** — Narrative playbooks (onboarding, new projects, use case docs, definition of done).
- **Conventions** — Layer rules (backend, frontend, shared) with examples; start from [Principles](/conventions/principles).
- **Architecture** — Structural model (Clean Architecture, dependencies, CQRS placement).
- **Blueprints** — Full-file reference code to copy, not fragments in convention text.
- **Templates** — Scaffolds for consumer repos (domain docs, CI, config).
- **Decisions** — Architecture decision records (context and rationale).
- **Runbooks** — Operational procedures (deploy, incidents, migrations).
- **Governance** — Exceptions and how standards evolve.

Many convention pages open with a short **Agent Quick Rules** section: a dense summary for tooling and experienced readers. The rest of each page is the full human-readable convention.

## Search and navigation

Use **Search** in the header (Ctrl+K) to find a topic across all pages. The sidebar groups the same content by area; nested sections can be expanded for blueprints, decisions, runbooks, and templates.

Standards change in the GitHub repository; this site is rebuilt when that content is updated in the public site repo. For the latest source or to propose edits, use the [Engineering Standards](https://github.com/Litenova-Solutions/Engineering-Standards) repository.
