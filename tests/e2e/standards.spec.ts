import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import standardsManifest from '../../standards/standards.manifest.json' with { type: 'json' };

const standardsTag = `v${standardsManifest.version}`;

test('standards landing exposes the pinned release and documentation navigation', async ({
  isMobile,
  page,
}) => {
  await page.goto('/Standards');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Engineering Standards' }),
  ).toBeVisible();
  await expect(
    page.getByText(`Released Baseline ${standardsTag}`),
  ).toBeVisible();
  await expect(
    page
      .getByRole('region', { name: 'Engineering Standards' })
      .getByRole('link', { name: 'Getting Started' }),
  ).toHaveAttribute('href', '/Standards/guide/getting-started');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.litenova.solutions/Standards',
  );

  if (isMobile) {
    const viewportWidth = page.viewportSize()?.width ?? 0;
    const mainContent = await page.locator('#main-content').boundingBox();

    expect(mainContent?.width).toBeGreaterThan(viewportWidth * 0.9);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(viewportWidth + 1);
  }
});

test('a standards document renders its title, edit link, and released content', async ({
  page,
}) => {
  await page.goto('/Standards/guide/getting-started');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Get Started' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: /edit on github/i }),
  ).toHaveAttribute(
    'href',
    new RegExp(
      `/blob/${standardsTag.replace(/\./g, '\\.')}/docs/guide/getting-started\\.md$`,
    ),
  );
});

test('the controlled UI topic published by this release is reachable', async ({
  page,
}) => {
  await page.goto('/Standards/frontend/ui');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Controlled UI Governance' }),
  ).toBeVisible();
  await expect(
    page.getByText('FRONTEND.UI.GOVERNANCE.001').first(),
  ).toBeVisible();
});

test('static standards search finds and opens a topic', async ({
  isMobile,
  page,
}) => {
  await page.goto('/Standards');
  const searchTrigger = isMobile
    ? page.locator('button[data-search]:visible').first()
    : page.getByRole('button', { name: /^Search/ });
  await searchTrigger.click();

  const dialog = page.getByRole('dialog', { name: 'Search' });
  await expect(dialog).toBeVisible();
  await dialog.getByPlaceholder('Search').fill('marten persistence');

  const result = dialog.getByRole('option', { name: /Persistence/ }).first();
  await expect(result).toBeVisible();
  await result.click();
  await expect(page).toHaveURL(/\/Standards\/backend\/persistence$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('open standards search has valid accessibility semantics', async ({
  isMobile,
  page,
}) => {
  await page.goto('/Standards');
  const searchTrigger = isMobile
    ? page.locator('button[data-search]:visible').first()
    : page.getByRole('button', { name: /^Search/ });
  await searchTrigger.click();

  const dialog = page.getByRole('dialog', { name: 'Search' });
  await dialog.getByPlaceholder('Search').fill('marten persistence');
  await expect(
    dialog.getByRole('option', { name: /Persistence/ }).first(),
  ).toBeVisible();

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('routes published under the previous taxonomy redirect permanently', async ({
  request,
}) => {
  for (const route of [
    {
      path: '/Standards/guides/onboarding',
      destination: '/Standards/guide/getting-started',
    },
    {
      path: '/Standards/foundations/principles',
      destination: '/Standards/core/principles',
    },
    {
      path: '/Standards/conventions/backend/persistence-marten',
      destination: '/Standards/backend/persistence',
    },
    {
      path: '/Standards/conventions/frontend/data-and-state',
      destination: '/Standards/frontend/data',
    },
    { path: '/Standards/extensions', destination: '/Standards/ext' },
    {
      path: '/Standards/profile/dotnet-nextjs',
      destination: '/Standards/profile/nextjs',
    },
  ]) {
    const response = await request.get(route.path, { maxRedirects: 0 });
    expect(response.status(), `Expected a redirect for ${route.path}`).toBe(
      308,
    );
    expect(response.headers().location).toBe(route.destination);
  }
});

test('standards landing has no automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/Standards');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
