---
title: Engineering Standards v1
description: The released Litenova baseline for one bounded-context ASP.NET Core, PostgreSQL, Marten, and optional Next.js application.
---

## A pinned engineering baseline

This site publishes **Engineering Standards v1.0.0**, the same Markdown release used by Litenova consumer repositories. Version 1 covers one bounded-context business application built with ASP.NET Core, PostgreSQL, Marten, and optional Next.js frontends.

The release is pinned to the [v1.0.0 source tag](https://github.com/Litenova-Solutions/Engineering-Standards/tree/v1.0.0). Standards pages are read-only here. Proposed corrections belong in the [Engineering Standards repository](https://github.com/Litenova-Solutions/Engineering-Standards).

## Choose an entry point

| Goal | Start here |
|:---|:---|
| Adopt the release in a repository | [Adopt standards v1](/Standards/guides/adopt-v1) |
| Confirm that an application fits the supported scope | [Supported scope](/Standards/foundations/scope) |
| Review the complete selected stack | [.NET and Next.js profile](/Standards/profile/dotnet-nextjs) |
| Understand the delivery method | [Agentic Domain-Driven Delivery](/Standards/foundations/addd) |
| Model a business capability | [Model a Domain capability](/Standards/guides/model-domain) |
| Find an exact convention | [Documentation map](/Standards/doc-map) |
| Select conditional behavior | [Extension index](/Standards/extensions) |
| Copy consumer documentation | [Consumer templates](/Standards/templates) |
| Review baseline decisions | [Decision records](/Standards/reference/decisions) |

## How each topic works

Each convention and extension separates five concerns:

- **Intent** explains why the topic exists.
- **Agent Summary** provides narrow task context.
- **Standards** define required boundaries with stable rule IDs.
- **Conventions** provide replaceable defaults.
- **Verification** names the evidence required for review.

Use the sidebar to browse by ownership area. Press `Ctrl+K` or `Command+K` to search the complete release without sending the query to a third-party service.

## Baseline and extensions

The baseline profile selects the repository, backend, frontend, testing, security, and operating conventions required for version 1. Extensions remain inactive until a current requirement meets their activation criteria and the consumer lists them in `standards.project.json`.

Start with the baseline. Add an extension only when the product needs its behavior.
