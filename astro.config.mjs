import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightBasePath } from 'starlight-base-path';
import {
  buildSidebarFromDir,
  resolveDocsRoot,
} from './scripts/sidebar-from-docs.mjs';

const docsRoot = resolveDocsRoot();

export default defineConfig({
  site: 'https://litenova.solutions',
  base: '/Standards',
  outDir: 'Standards',
  integrations: [
    starlight({
      plugins: [starlightBasePath()],
      title: 'Engineering Standards',
      description:
        'Public engineering standards for Litenova Solutions — architecture, conventions, guides, and decisions.',
      logo: {
        src: './public/logo.png',
        alt: 'Litenova Solutions',
      },
      favicon: '/favicon.ico',
      customCss: ['./src/styles/litenova-starlight.css'],
      components: {
        ThemeProvider: './src/components/ForceDarkTheme.astro',
        ThemeSelect: './src/components/EmptyComponent.astro',
        Footer: './src/components/LitenovaFooter.astro',
      },
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0a0a0a' } },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Litenova-Solutions/Engineering-Standards',
        },
      ],
      credits: false,
      lastUpdated: false,
      sidebar: [
        {
          label: '← litenova.solutions',
          link: 'https://litenova.solutions',
          attrs: { target: '_blank', rel: 'noopener noreferrer' },
        },
        { label: 'Home', link: '/' },
        {
          label: 'Getting started',
          items: [
            { label: 'Documentation map', link: '/readme' },
            { label: 'Onboarding', link: '/guides/onboarding' },
            { label: 'Philosophy', link: '/philosophy' },
            { label: 'Glossary', link: '/glossary' },
            { label: 'Agentic development', link: '/agentic-development' },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Agentic domain-driven design',
              link: '/guides/agentic-domain-driven-design',
            },
            { label: 'Write a use case doc', link: '/guides/write-use-case-doc' },
            { label: 'Add a use case', link: '/guides/add-new-use-case' },
            { label: 'Definition of done', link: '/guides/definition-of-done' },
            { label: 'Create a new project', link: '/guides/create-new-project' },
            { label: 'Single project setup', link: '/guides/single-project-setup' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            {
              label: 'Clean architecture',
              link: '/architecture/clean-architecture',
            },
          ],
        },
        {
          label: 'Conventions',
          items: [
            { label: 'Principles', link: '/conventions/principles' },
            {
              label: 'Backend',
              collapsed: true,
              items: [
                {
                  label: 'Solution structure',
                  link: '/conventions/backend/solution-structure',
                },
                {
                  label: 'Domain layer',
                  link: '/conventions/backend/domain-layer',
                },
                {
                  label: 'Application layer',
                  link: '/conventions/backend/application-layer',
                },
                {
                  label: 'Infrastructure layer',
                  link: '/conventions/backend/infrastructure-layer',
                },
                { label: 'API layer', link: '/conventions/backend/api-layer' },
                {
                  label: 'Exception hierarchy',
                  link: '/conventions/backend/exception-hierarchy',
                },
                {
                  label: 'Query / read strategy',
                  link: '/conventions/backend/query-read-strategy',
                },
                { label: 'Testing', link: '/conventions/backend/testing' },
                {
                  label: 'API acceptance tests',
                  link: '/conventions/backend/api-acceptance-tests',
                },
                {
                  label: 'External dependencies',
                  link: '/conventions/backend/external-dependencies',
                },
                {
                  label: 'Authentication & authorization',
                  link: '/conventions/backend/authentication-and-authorization',
                },
                {
                  label: 'Object authorization',
                  link: '/conventions/backend/object-authorization',
                },
                {
                  label: 'Observability',
                  link: '/conventions/backend/observability',
                },
                {
                  label: 'Reliability',
                  link: '/conventions/backend/reliability',
                },
                {
                  label: 'Background jobs',
                  link: '/conventions/backend/background-jobs',
                },
                { label: 'Caching', link: '/conventions/backend/caching' },
                {
                  label: 'Concurrency',
                  link: '/conventions/backend/concurrency',
                },
                {
                  label: 'Soft delete',
                  link: '/conventions/backend/soft-delete',
                },
                {
                  label: 'Raw SQL & reporting',
                  link: '/conventions/backend/raw-sql-and-reporting',
                },
                {
                  label: 'Options & configuration',
                  link: '/conventions/backend/options-and-configuration',
                },
                {
                  label: 'Worker projects',
                  link: '/conventions/backend/worker-projects',
                },
                {
                  label: 'Deployment & migrations',
                  link: '/conventions/backend/deployment-and-migrations',
                },
              ],
            },
            {
              label: 'Frontend',
              collapsed: true,
              items: [
                {
                  label: 'Next.js App Router',
                  link: '/conventions/frontend/nextjs-app-router',
                },
                {
                  label: 'Components',
                  link: '/conventions/frontend/components',
                },
                {
                  label: 'Data fetching',
                  link: '/conventions/frontend/data-fetching',
                },
                {
                  label: 'State & forms',
                  link: '/conventions/frontend/state-and-forms',
                },
                {
                  label: 'State management',
                  link: '/conventions/frontend/state-management',
                },
                { label: 'Testing', link: '/conventions/frontend/testing' },
                {
                  label: 'Feature boundaries',
                  link: '/conventions/frontend/feature-boundaries',
                },
                {
                  label: 'Error handling',
                  link: '/conventions/frontend/error-handling-and-problem-details',
                },
                {
                  label: 'Environment & config',
                  link: '/conventions/frontend/environment-and-runtime-config',
                },
                {
                  label: 'Internationalization',
                  link: '/conventions/frontend/internationalization',
                },
                {
                  label: 'Admin API auth',
                  link: '/conventions/frontend/admin-api-auth',
                },
              ],
            },
            {
              label: 'Shared',
              collapsed: true,
              items: [
                {
                  label: 'Agentic guardrails',
                  link: '/conventions/shared/agentic-guardrails',
                },
                { label: 'CI gates', link: '/conventions/shared/ci' },
                { label: 'CI / CD', link: '/conventions/shared/ci-cd' },
                { label: 'Security', link: '/conventions/shared/security' },
                {
                  label: 'Security controls',
                  link: '/conventions/shared/security-controls',
                },
                {
                  label: 'API compatibility',
                  link: '/conventions/shared/api-compatibility',
                },
                {
                  label: 'Supply chain security',
                  link: '/conventions/shared/supply-chain-security',
                },
                {
                  label: 'Monorepo structure',
                  link: '/conventions/shared/monorepo-structure',
                },
                {
                  label: 'Git workflow',
                  link: '/conventions/shared/git-workflow',
                },
                { label: 'Naming', link: '/conventions/shared/naming' },
                {
                  label: 'Containers',
                  link: '/conventions/shared/containers',
                },
                {
                  label: 'Writing style',
                  link: '/conventions/shared/writing-style',
                },
                {
                  label: 'Forbidden packages',
                  link: '/conventions/shared/forbidden-packages',
                },
                {
                  label: 'Realtime updates',
                  link: '/conventions/shared/realtime-updates',
                },
                {
                  label: 'ADR template',
                  link: '/conventions/shared/adr-template',
                },
                {
                  label: 'Local IDE setup',
                  link: '/conventions/shared/local-ide-setup',
                },
                {
                  label: 'Infrastructure as code',
                  link: '/conventions/shared/infrastructure-as-code',
                },
              ],
            },
          ],
        },
        {
          label: 'Blueprints',
          items: [
            { label: 'Overview', link: '/blueprints/readme' },
            {
              label: 'Backend',
              collapsed: true,
              items: buildSidebarFromDir(docsRoot, 'blueprints/backend'),
            },
            {
              label: 'Frontend',
              collapsed: true,
              items: buildSidebarFromDir(docsRoot, 'blueprints/frontend'),
            },
          ],
        },
        {
          label: 'Templates',
          items: [
            { label: 'Overview', link: '/templates/readme' },
            {
              label: 'Scaffolds (docs)',
              collapsed: true,
              items: buildSidebarFromDir(docsRoot, 'templates/docs', {
                excludeReadme: true,
              }),
            },
          ],
        },
        {
          label: 'Decisions (ADRs)',
          collapsed: true,
          items: [
            { label: 'Index', link: '/decisions/readme' },
            ...buildSidebarFromDir(docsRoot, 'decisions', { excludeReadme: true }),
          ],
        },
        {
          label: 'Runbooks',
          collapsed: true,
          items: [
            { label: 'Index', link: '/runbooks/readme' },
            ...buildSidebarFromDir(docsRoot, 'runbooks', { excludeReadme: true }),
          ],
        },
        {
          label: 'Governance',
          items: [
            { label: 'Overview', link: '/governance/readme' },
            { label: 'Exceptions', link: '/governance/exceptions' },
          ],
        },
      ],
    }),
  ],
});
