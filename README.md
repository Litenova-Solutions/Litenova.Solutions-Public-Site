# Litenova Solutions - Public Site

[![Live Site](https://img.shields.io/badge/Live-litenova.solutions-gold?style=flat-square)](https://litenova.solutions)
[![Engineering Standards](https://img.shields.io/badge/Standards-/Standards/-gold?style=flat-square)](https://litenova.solutions/Standards/)
[![License](https://img.shields.io/github/license/Litenova-Solutions/Litenova.Solutions-Public-Site?style=flat-square)](LICENSE)

The public marketing site for **[Litenova Solutions](https://litenova.solutions)** and a read-only **Engineering Standards** documentation site at [`/Standards/`](https://litenova.solutions/Standards/). Both deploy together to GitHub Pages from this repository.

---

## Repository layout

| Path | Role |
|------|------|
| `index.html` | Marketing landing page (static HTML + Tailwind CDN) |
| `engineering-standards/` | Git submodule → [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards) (do not edit here) |
| `standards-overrides/` | Site-owned pages (splash home, 404) |
| `scripts/stage-standards-docs.mjs` | Stage submodule `docs/` → `.standards-src` + transforms |
| `scripts/sidebar-from-docs.mjs` | Build sidebar link trees from staged markdown |
| `astro.config.mjs`, `src/` | Astro 6 + Starlight (theme, loader, sidebar) |
| `public/` | `logo.png`, `favicon.ico` for `/Standards/` |
| `standards-site/README.md` | Standards-site maintainer notes |
| `Standards/` | Build output (gitignored) served at `/Standards/` |

Standards **content** is authored in the Engineering-Standards repo. This repo pins that repo as a submodule and publishes a web-friendly copy. Update the submodule pointer here when you want new standards on the live site.

---

## Deployment

```text
push to main
    │
    ▼
.github/workflows/deploy-pages.yml
    │
    ├─ checkout (submodules: recursive)
    ├─ pnpm install --frozen-lockfile
    ├─ pnpm docs:build
    │     ├─ stage → .standards-src
    │     └─ astro build → Standards/
    │
    └─ upload repository root (marketing + Standards/)
            ▼
    litenova.solutions/          → index.html
    litenova.solutions/Standards/ → Starlight static site
```

GitHub Pages must use the **GitHub Actions** source. The custom domain is set via `CNAME`.

---

## Engineering Standards (local)

**Requirements:** Node 22+, [pnpm](https://pnpm.io/) 10.

```bash
git clone --recurse-submodules git@github.com:Litenova-Solutions/Litenova.Solutions-Public-Site.git
cd Litenova.Solutions-Public-Site

# If you cloned without submodules:
git submodule update --init --recursive

pnpm install
pnpm docs:dev
```

Open **http://localhost:4321/Standards/** (Astro `base` is `/Standards`).

| Command | Purpose |
|---------|---------|
| `pnpm docs:stage` | Refresh `.standards-src` from submodule + overrides |
| `pnpm docs:dev` | Stage + dev server |
| `pnpm docs:build` | Stage + production build → `Standards/` |
| `pnpm docs:preview` | Stage + preview the production build |

### Staging transforms

`pnpm docs:stage` copies the full `engineering-standards/docs` tree (including templates and agent-oriented guides), overlays `standards-overrides/`, then:

- Adds Starlight `title` frontmatter and removes duplicate `#` headings
- Collapses consecutive `---` horizontal rules
- Rewrites relative `.md` links to site routes

Docs are loaded from `.standards-src` via a glob content loader (not `src/content/docs`). Sidebar sections for blueprints, templates, decisions, and runbooks are generated from that folder in `scripts/sidebar-from-docs.mjs` because Starlight `autogenerate` only indexes `src/content/docs`.

Further detail: [standards-site/README.md](standards-site/README.md).

### Local testing

1. **Standards (primary)** — `pnpm docs:dev` → home, `/guides/onboarding/`, `/conventions/principles/`, search, sidebar.
2. **Production-like** — `pnpm docs:build` && `pnpm docs:preview`.
3. **Marketing only** — `npx serve .` → http://localhost:3000/ (links to `/Standards/` need a built `Standards/` folder or a second server).
4. **Full static mirror** — `pnpm docs:build` then `npx serve .` → http://localhost:3000/Standards/.

---

## Marketing site (local)

No build step:

```bash
npx serve .
```

---

## Updating standards content

1. Change docs in [Engineering-Standards](https://github.com/Litenova-Solutions/Engineering-Standards) and merge to `main`.
2. In this repo: `git submodule update --remote engineering-standards` (or pin a tag/commit), commit the submodule gitlink.
3. Push to `main`; CI rebuilds and deploys.

Do not commit `Standards/`, `.standards-src/`, `node_modules/`, or `.astro/`.

---

## About Litenova Solutions

Litenova Solutions designs and ships **cost-effective, distributed, and scalable software systems** with AI integrated across the development lifecycle:

- **AI-augmented engineering** — Agents in design, implementation, review, and testing.
- **Distributed systems** — High-throughput, fault-tolerant architectures.
- **Open source** — [LiteBus](https://github.com/litenova/LiteBus), [LitePress](https://github.com/Litenova-Solutions/LitePress).
- **Transparent standards** — [/Standards/](https://litenova.solutions/Standards/) and [Engineering-Standards on GitHub](https://github.com/Litenova-Solutions/Engineering-Standards).

---

## Projects

| Project | Description | Status |
|---------|-------------|--------|
| [Entro.to](https://entro.to) | Cost-effective, high-throughput event ticketing platform | In Development |
| [LiteBus](https://github.com/litenova/LiteBus) | Lightweight in-process mediator for CQS in .NET | Open Source |
| [LitePress](https://github.com/Litenova-Solutions/LitePress) | Publishing platform built to our Engineering Standards | Open Source |

---

## Tech stack

| Layer | Stack |
|-------|--------|
| Marketing | HTML5, Tailwind CSS (CDN), Font Awesome, JSON-LD |
| Standards | Astro 6, Starlight, `starlight-base-path`, Pagefind |
| CI | pnpm 10, Node 22, GitHub Actions → Pages |
| Hosting | GitHub Pages, `litenova.solutions` |

---

## Contact

- **Email:** info@litenova.solutions
- **LinkedIn:** [linkedin.com/company/litenova](https://www.linkedin.com/company/litenova/)
- **GitHub:** [github.com/Litenova-Solutions](https://github.com/Litenova-Solutions)
- **KVK:** 95043497

---

## License

[MIT](LICENSE) © 2026 Litenova Solutions
