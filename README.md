# Litenova Solutions - Public Site

[![Live Site](https://img.shields.io/badge/Live-litenova.solutions-gold?style=flat-square)](https://litenova.solutions)
[![License](https://img.shields.io/github/license/Litenova-Solutions/Litenova.Solutions-Public-Site?style=flat-square)](LICENSE)

The public-facing marketing and landing page for **[Litenova Solutions](https://litenova.solutions)**, an AI-driven software development company based in Rotterdam, The Netherlands.

---

## About Litenova Solutions

Litenova Solutions designs and ships **cost-effective, distributed, and scalable software systems** powered by AI at every stage of the development lifecycle. We specialize in:

- **AI-Augmented Engineering** - AI coding agents integrated into design, implementation, review, and testing workflows.
- **Distributed Systems** - High-throughput, fault-tolerant architectures built for scale.
- **Open Source Contributions** - Building on and giving back to the developer community.
- **Transparent Engineering Standards** - Our internal practices are [publicly available on GitHub](https://github.com/Litenova-Solutions/Engineering-Standards).

---

## Projects

| Project | Description | Status |
|---|---|---|
| [Entro.to](https://entro.to) | Cost-effective, high-throughput event ticketing platform | In Development |
| [LiteBus](https://github.com/litenova/LiteBus) | Lightweight in-process mediator for CQS in .NET | Open Source |
| [LitePress](https://github.com/Litenova-Solutions/LitePress) | Publishing platform built to our Engineering Standards | Open Source |

---

## Tech Stack

This site is a **static single-page application** hosted on GitHub Pages with a custom domain.

- **HTML5** - Semantic markup with accessibility attributes and SEO-optimized structure
- **Tailwind CSS** (CDN) - Utility-first styling with a custom design system
- **Font Awesome** - Icon library
- **JSON-LD / Schema.org** - Structured data for rich search results
- **Open Graph & Twitter Card** meta tags for social sharing

---

## SEO

The site implements a comprehensive SEO strategy:

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<section>`)
- Descriptive `<title>` and `<meta name="description">`
- Canonical URL (`<link rel="canonical">`)
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (Organization schema)
- `robots` meta directive (`index, follow`)
- Preconnect hints for external CDN resources
- `aria-label` attributes on navigation links

---

## Local Development

This is a static site - no build step required.

```bash
git clone git@github.com:Litenova-Solutions/Litenova.Solutions-Public-Site.git
cd Litenova.Solutions-Public-Site
# Open index.html in your browser, or serve with any static file server:
npx serve .
```

---

## Deployment

The site is automatically deployed via **GitHub Pages** from the `main` branch. The custom domain `litenova.solutions` is configured through the `CNAME` file.

---

## Contact

- **Email:** info@litenova.solutions
- **LinkedIn:** [linkedin.com/company/litenova](https://www.linkedin.com/company/litenova/)
- **GitHub:** [github.com/Litenova-Solutions](https://github.com/Litenova-Solutions)
- **KVK:** 95043497

---

## License

[MIT](LICENSE) © 2026 Litenova Solutions
