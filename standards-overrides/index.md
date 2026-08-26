---
title: Engineering Standards
description: The released Litenova baseline for bounded-context ASP.NET Core, PostgreSQL, Marten, and Next.js or Blazor applications.
---

## Pinned Engineering Baseline

This site publishes **Engineering Standards v1.15.0**, the same Markdown release that Litenova consumer repositories pin. The release covers one bounded-context business application built with ASP.NET Core, PostgreSQL, and Marten, with either a Next.js or a Blazor frontend.

The release is pinned to the [v1.15.0 source tag](https://github.com/Litenova-Solutions/Engineering-Standards/tree/v1.15.0). Standards pages are read-only here. Proposed corrections belong in the [Engineering Standards repository](https://github.com/Litenova-Solutions/Engineering-Standards).

Each release states its complete contract. A release carries no compatibility guarantee, migration path, or identifier alias to an earlier release, and a consumer keeps a pinned release for as long as that consumer chooses.

## Choose an Entry Point

| Goal                                                 | Start Here                                                     |
| :--------------------------------------------------- | :------------------------------------------------------------- |
| Adopt the release in a repository                    | [Getting Started](/Standards/guide/getting-started)            |
| Confirm that an application fits the supported scope | [Supported Scope](/Standards/core/scope)                       |
| Review the complete selected stack                   | [.NET and Next.js Platform Profile](/Standards/profile/nextjs) |
| Review the browser-only stack                        | [.NET and Blazor Platform Profile](/Standards/profile/blazor)  |
| Understand the delivery method                       | [Agentic Engineering System](/Standards/core/system)           |
| Model a business capability                          | [Model a Domain Capability](/Standards/guide/model-domain)     |
| Resolve a provision identifier                       | [Provisions](/Standards/reference/provisions)                  |
| Find an exact convention                             | [Documentation Map](/Standards/doc-map)                        |
| Select conditional behavior                          | [Extension Index](/Standards/ext)                              |
| Copy consumer documentation                          | [Consumer Templates](/Standards/templates)                     |

## How Each Topic Works

Each topic page separates five concerns:

- **Intent** explains why the topic exists.
- **Agent Summary** provides narrow task context.
- **Standards** define required boundaries with stable provision identifiers.
- **Conventions** provide replaceable defaults.
- **Verification** names the evidence required for review.

A provision identifier reads `AREA.PAGE.TOPIC.NNN`, and the directory and file stem locate its owning page without a lookup. `FRONTEND.UI.GOVERNANCE.001` resolves to the frontend area, the `ui` page, the governance topic, and the first assertion.

Use the sidebar to browse by ownership area. Press `Ctrl+K` or `Command+K` to search the complete release without sending the query to a third-party service.

## Baseline and Extensions

The platform profile selects the workspace, backend, frontend, testing, security, and operating topics required for the release. Extensions remain inactive until a current requirement meets their activation criteria and the consumer lists them in `standards.project.json`.

Start with the baseline. Add an extension only when the product needs its behavior.
