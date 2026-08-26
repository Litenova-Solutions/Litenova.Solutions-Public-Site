import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isDevelopment = process.env.NODE_ENV === 'development';

const scriptSources = [
  "'self'",
  "'unsafe-inline'",
  ...(isDevelopment ? ["'unsafe-eval'"] : []),
].join(' ');

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "img-src 'self' data: blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  `script-src ${scriptSources}`,
  "style-src 'self' 'unsafe-inline'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  {
    key: 'Permissions-Policy',
    value:
      'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
];

// Removed company routes keep a permanent redirect to the landing-page anchor
// that now owns their content.
const marketingRedirects: Record<string, string> = {
  '/about': '/#services',
  '/services': '/#services',
  '/open-source': '/#products',
  '/contact': '/#contact',
};

// Engineering Standards v1.14.0 flattened the conventions directory into one
// directory per area and renamed 26 pages. Every route published under the
// previous taxonomy keeps a permanent redirect to the page that now owns its
// subject.
const standardsRedirects: Record<string, string> = {
  '/Standards/foundations/scope': '/Standards/core/scope',
  '/Standards/foundations/principles': '/Standards/core/principles',
  '/Standards/foundations/addd': '/Standards/core/system',
  '/Standards/foundations/agent-protocol': '/Standards/core/agent',
  '/Standards/foundations/release-standard': '/Standards/core/release',
  '/Standards/foundations/authoring-standard': '/Standards/core/authoring',
  '/Standards/philosophy': '/Standards/core/principles',
  '/Standards/conventions/repository/structure':
    '/Standards/workspace/structure',
  '/Standards/conventions/repository/naming': '/Standards/workspace/naming',
  '/Standards/conventions/repository/dependencies':
    '/Standards/workspace/dependencies',
  '/Standards/conventions/repository/configuration':
    '/Standards/workspace/config',
  '/Standards/conventions/repository/writing': '/Standards/core/authoring',
  '/Standards/conventions/workspace/structure':
    '/Standards/workspace/structure',
  '/Standards/conventions/workspace/naming': '/Standards/workspace/naming',
  '/Standards/conventions/workspace/dependencies':
    '/Standards/workspace/dependencies',
  '/Standards/conventions/workspace/configuration':
    '/Standards/workspace/config',
  '/Standards/conventions/backend/architecture':
    '/Standards/backend/architecture',
  '/Standards/conventions/backend/domain': '/Standards/backend/domain',
  '/Standards/conventions/backend/application':
    '/Standards/backend/application',
  '/Standards/conventions/backend/persistence-marten':
    '/Standards/backend/persistence',
  '/Standards/conventions/backend/api': '/Standards/backend/api',
  '/Standards/architecture/clean-architecture':
    '/Standards/backend/architecture',
  '/Standards/conventions/frontend/structure': '/Standards/frontend/structure',
  '/Standards/conventions/frontend/rendering': '/Standards/frontend/rendering',
  '/Standards/conventions/frontend/components':
    '/Standards/frontend/components',
  '/Standards/conventions/frontend/data-and-state': '/Standards/frontend/data',
  '/Standards/conventions/frontend/testing': '/Standards/frontend/testing',
  '/Standards/conventions/frontend/ui-governance': '/Standards/frontend/ui',
  '/Standards/conventions/quality/backend-testing':
    '/Standards/backend/testing',
  '/Standards/conventions/quality/security': '/Standards/quality/security',
  '/Standards/conventions/quality/operations': '/Standards/quality/operations',
  '/Standards/conventions/quality/ci': '/Standards/quality/ci',
  '/Standards/extensions': '/Standards/ext',
  '/Standards/extensions/acceptance-bdd': '/Standards/ext/bdd',
  '/Standards/extensions/api-compatibility': '/Standards/ext/compat',
  '/Standards/extensions/caching': '/Standards/ext/cache',
  '/Standards/extensions/concurrency-idempotency': '/Standards/ext/concurrency',
  '/Standards/extensions/data-lifecycle': '/Standards/ext/lifecycle',
  '/Standards/extensions/deployment-containers': '/Standards/ext/containers',
  '/Standards/extensions/external-integrations': '/Standards/ext/integrations',
  '/Standards/extensions/frontend-authjs': '/Standards/ext/authjs',
  '/Standards/extensions/localization': '/Standards/ext/locale',
  '/Standards/extensions/multitenancy': '/Standards/ext/tenancy',
  '/Standards/extensions/outbox-worker': '/Standards/ext/outbox',
  '/Standards/extensions/persistence-ef-core': '/Standards/ext/efcore',
  '/Standards/extensions/realtime': '/Standards/ext/realtime',
  '/Standards/extensions/reporting': '/Standards/ext/report',
  '/Standards/extensions/scheduled-jobs': '/Standards/ext/jobs',
  '/Standards/guides/adopt-v1': '/Standards/guide/getting-started',
  '/Standards/guides/getting-started': '/Standards/guide/getting-started',
  '/Standards/guides/onboarding': '/Standards/guide/getting-started',
  '/Standards/guides/model-domain': '/Standards/guide/model-domain',
  '/Standards/guides/v1-release-scope': '/Standards/core/scope',
  '/Standards/profile/dotnet-nextjs': '/Standards/profile/nextjs',
  '/Standards/profile/dotnet-blazor': '/Standards/profile/blazor',
  '/Standards/glossary': '/Standards/reference/glossary',
  '/Standards/decisions': '/Standards/reference/glossary',
  '/Standards/reference/decisions': '/Standards/reference/glossary',
  '/Standards/roadmap': '/Standards/release-notes',
};

function permanentRedirects(map: Record<string, string>) {
  return Object.entries(map).map(([source, destination]) => ({
    source,
    destination,
    permanent: true,
  }));
}

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // `next dev` otherwise appends a generated block to AGENTS.md on every start.
  // That file is the hand-authored agent protocol for this repository, it is
  // reviewed, and `scripts/validate-site.mjs` requires ASCII source text, which
  // the generated block does not satisfy.
  agentRules: false,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  async redirects() {
    return [
      ...permanentRedirects(marketingRedirects),
      ...permanentRedirects(standardsRedirects),
    ];
  },
};

export default withMDX(config);
