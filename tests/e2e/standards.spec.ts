import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('standards landing exposes the pinned release and documentation navigation', async ({
  isMobile,
  page,
}) => {
  await page.goto('/Standards');

  await expect(page.getByRole('heading', { level: 1, name: 'Engineering Standards' })).toBeVisible();
  await expect(page.getByText('Released Baseline v1.0.0')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Adopt Version 1' })).toHaveAttribute(
    'href',
    '/Standards/guides/adopt-v1',
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.litenova.solutions/Standards',
  );

  if (isMobile) {
    const viewportWidth = page.viewportSize()?.width ?? 0;
    const mainContent = await page.locator('#main-content').boundingBox();

    expect(mainContent?.width).toBeGreaterThan(viewportWidth * 0.9);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      viewportWidth + 1,
    );
  }
});

test('a standards document renders its title, edit link, and v1 content', async ({ page }) => {
  await page.goto('/Standards/guides/adopt-v1');

  await expect(page.getByRole('heading', { level: 1, name: 'Adopt Standards v1' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Sequence' })).toBeVisible();
  await expect(page.getByRole('link', { name: /edit on github/i })).toHaveAttribute(
    'href',
    /\/blob\/v1\.0\.0\/docs\/guides\/adopt-v1\.md$/,
  );
});

test('static standards search finds and opens a v1 topic', async ({ isMobile, page }) => {
  await page.goto('/Standards');
  const searchTrigger = isMobile
    ? page.locator('button[data-search]:visible').first()
    : page.getByRole('button', { name: /^Search/ });
  await searchTrigger.click();

  const dialog = page.getByRole('dialog', { name: 'Search' });
  await expect(dialog).toBeVisible();
  await dialog.getByPlaceholder('Search').fill('baseline persistence model');

  const result = dialog.getByRole('option', { name: /Marten Persistence/ }).first();
  await expect(result).toBeVisible();
  await result.click();
  await expect(page).toHaveURL(/\/Standards\/conventions\/backend\/persistence-marten$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Marten Persistence' })).toBeVisible();
});

test('open standards search has valid accessibility semantics', async ({ isMobile, page }) => {
  await page.goto('/Standards');
  const searchTrigger = isMobile
    ? page.locator('button[data-search]:visible').first()
    : page.getByRole('button', { name: /^Search/ });
  await searchTrigger.click();

  const dialog = page.getByRole('dialog', { name: 'Search' });
  await dialog.getByPlaceholder('Search').fill('baseline persistence model');
  await expect(dialog.getByRole('option', { name: /Marten Persistence/ }).first()).toBeVisible();

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('legacy standards entry points redirect permanently', async ({ request }) => {
  const response = await request.get('/Standards/guides/onboarding', {
    maxRedirects: 0,
  });

  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe('/Standards/guides/adopt-v1');
});

test('standards landing has no automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('/Standards');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
