---
title: Engineering Standards v1
description: The released Litenova baseline for one bounded-context ASP.NET Core, PostgreSQL, Marten, and optional Next.js application.
---

## Pinned Engineering Baseline

This site publishes **Engineering Standards v1.0.0**, the same Markdown release used by Litenova consumer repositories. Version 1 covers one bounded-context business application built with ASP.NET Core, PostgreSQL, Marten, and optional Next.js frontends.

The release is pinned to the [v1.0.0 source tag](https://github.com/Litenova-Solutions/Engineering-Standards/tree/v1.0.0). Standards pages are read-only here. Proposed corrections belong in the [Engineering Standards repository](https://github.com/Litenova-Solutions/Engineering-Standards).

## Choose an Entry Point

| Goal | Start Here |
|:---|:---|
| Adopt the release in a repository | [Adopt Standards v1](/Standards/guides/adopt-v1) |
| Confirm that an application fits the supported scope | [Supported Scope](/Standards/foundations/scope) |
| Review the complete selected stack | [.NET and Next.js Profile](/Standards/profile/dotnet-nextjs) |
| Understand the delivery method | [Agentic Domain-Driven Delivery](/Standards/foundations/addd) |
| Model a business capability | [Model a Domain Capability](/Standards/guides/model-domain) |
| Find an exact convention | [Documentation Map](/Standards/doc-map) |
| Select conditional behavior | [Extension Index](/Standards/extensions) |
| Copy consumer documentation | [Consumer Templates](/Standards/templates) |
| Review baseline decisions | [Decision Records](/Standards/reference/decisions) |

## How Each Topic Works

Each convention and extension separates five concerns:

- **Intent** explains why the topic exists.
- **Agent Summary** provides narrow task context.
- **Standards** define required boundaries with stable rule IDs.
- **Conventions** provide replaceable defaults.
- **Verification** names the evidence required for review.

Use the sidebar to browse by ownership area. Press `Ctrl+K` or `Command+K` to search the complete release without sending the query to a third-party service.

## Baseline and Extensions

The baseline profile selects the repository, backend, frontend, testing, security, and operating conventions required for version 1. Extensions remain inactive until a current requirement meets their activation criteria and the consumer lists them in `standards.project.json`.

Start with the baseline. Add an extension only when the product needs its behavior.
