# Litenova Solutions — Public Site

[![Live Site](https://img.shields.io/badge/Live-litenova.solutions-gold?style=flat-square)](https://litenova.solutions)
[![Engineering Standards](https://img.shields.io/badge/Standards-/Standards/-gold?style=flat-square)](https://litenova.solutions/Standards/)
[![License](https://img.shields.io/github/license/Litenova-Solutions/Litenova.Solutions-Public-Site?style=flat-square)](LICENSE)

Unified **Next.js** application deployed on **Vercel** at [litenova.solutions](https://litenova.solutions):

- **Marketing** at `/`
- **Engineering Standards** documentation at `/Standards/`

Standards content is authored in the [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards) submodule and staged into this app at build time.

---

## Repository layout

| Path | Role |
|------|------|
| `app/` | Next.js App Router (marketing + standards routes) |
| `components/marketing/` | Marketing landing page sections |
| `components/standards/` | Standards splash + docs chrome |
| `engineering-standards/` | Git submodule (do not edit directly) |
| `standards-overrides/` | Site-owned standards pages + `meta.json` sidebar |
| `standards-splash/` | Generated splash body (`body.md` from staging) |
| `scripts/stage-standards-docs.mjs` | Stage submodule → `.standards-src` |
| `lib/source.ts` | Fumadocs content loader |
| `public/` | Static assets (logo, favicon) |
| `docs/MAINTAINER.md` | Maintainer notes |

---

## Deployment

```text
push to main
    │
    ▼
Vercel (Git integration, submodules enabled)
    │
    ├─ pnpm install
    ├─ pnpm build
    │     ├─ stage → .standards-src
    │     └─ next build
    │
    └─ litenova.solutions/
           ├─ /           → marketing
           └─ /Standards/ → Fumadocs docs
```

### Vercel settings

| Setting | Value |
|---------|-------|
| Root Directory | `.` |
| Framework Preset | Next.js |
| Node.js Version | 22 |
| Include Git Submodules | **ON** |
| Production Branch | `main` |
| Custom Domain | `litenova.solutions` |

After connecting Vercel, update DNS per Vercel instructions and disable GitHub Pages on this repository.

---

## Local development

```bash
git clone --recurse-submodules git@github.com:Litenova-Solutions/Litenova.Solutions-Public-Site.git
cd Litenova.Solutions-Public-Site
git submodule update --init --recursive   # if needed
pnpm install
pnpm dev
```

Open:

- Marketing: http://localhost:3000/
- Standards home: http://localhost:3000/Standards/
- Sample doc: http://localhost:3000/Standards/guides/onboarding
- Search: Ctrl+K on any standards page

---

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm stage` | Refresh `.standards-src` from submodule + overrides |
| `pnpm dev` | Stage + dev server |
| `pnpm build` | Stage + production build |
| `pnpm start` | Run production server locally |
| `pnpm lint` | Next.js lint |

---

## Staging transforms

`pnpm stage` runs `scripts/stage-standards-docs.mjs`, which:

1. Copies `engineering-standards/docs/` into `.standards-src/`
2. Overlays `standards-overrides/`
3. Injects `title` frontmatter from H1 when missing
4. Removes duplicate H1 after frontmatter
5. Collapses repeated horizontal rules
6. Rewrites internal links to `/Standards/...` paths
7. Moves splash `index.md` to `standards-splash/body.md`
8. Renames root `README.md` to `doc-map.md`

---

## Updating standards content

1. Edit and merge in [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards).
2. Update the submodule pointer in this repo.
3. Push to `main`; Vercel redeploys.

See [docs/MAINTAINER.md](docs/MAINTAINER.md) for sidebar and splash editing.

---

## Tech stack

| Layer | Stack |
|-------|-------|
| Framework | Next.js 16 (App Router) |
| Docs | Fumadocs UI + Fumadocs MDX |
| Search | Orama (server route) |
| Styling | Tailwind CSS v4 |
| CI | GitHub Actions build check |
| Hosting | Vercel, `litenova.solutions` |

---

## Open source

This repository is open source under the [MIT License](LICENSE).

| What | Where | License |
|------|-------|---------|
| Website + standards site code (this repo) | This repository | MIT |
| Engineering standards markdown content | [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards) submodule | See that repository |

- **Site changes** (layout, theme, marketing copy, staging scripts): open a PR here.
- **Standards content** (conventions, guides, ADRs): open a PR in [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards), then update the submodule pointer here.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details. Trademark use is covered in [TRADEMARK.md](TRADEMARK.md).

---

## Security

To report a security vulnerability, see [SECURITY.md](SECURITY.md). Please do not open public issues for security reports.

---

## Maintainer notes

See [docs/MAINTAINER.md](docs/MAINTAINER.md) for content flow, sidebar editing, and Vercel configuration.
