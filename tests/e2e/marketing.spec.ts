import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home page publishes identity, navigation, metadata, and security headers', async ({
  page,
}) => {
  const response = await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /software engineering for distributed \.net systems/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Engineering Standards v1' })).toBeVisible();
  for (const heading of [
    'Engineering Services',
    'Engineering Standards v1',
    'Products and Open Source',
    'Contact',
  ]) {
    await expect(page.getByRole('heading', { level: 2, name: heading })).toBeVisible();
  }
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.litenova.solutions',
  );
  await expect(page.locator('script[type="application/ld+json"]')).not.toHaveCount(0);
  expect(response?.headers()['x-content-type-options']).toBe('nosniff');
  expect(response?.headers()['strict-transport-security']).toBe('max-age=63072000');
  expect(response?.headers()['content-security-policy']).toContain("default-src 'self'");
});

test('removed marketing routes redirect to landing-page sections', async ({ request }) => {
  for (const route of [
    { path: '/about', destination: '/#services' },
    { path: '/services', destination: '/#services' },
    { path: '/open-source', destination: '/#projects' },
    { path: '/contact', destination: '/#contact' },
  ]) {
    const response = await request.get(route.path, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(route.destination);
  }
});

test('public company and reference pages have one visible page heading', async ({ page }) => {
  for (const path of ['/', '/privacy', '/accessibility']) {
    await page.goto(path);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeVisible();
  }
});

test('mobile navigation is keyboard operable', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'This journey applies to the mobile navigation.');

  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Open navigation' });
  await trigger.focus();
  await page.keyboard.press('Enter');

  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Services' }).click();
  await expect(page).toHaveURL(/\/#services$/);
});

for (const pageCase of [
  { name: 'home', path: '/' },
  { name: 'privacy', path: '/privacy' },
  { name: 'accessibility', path: '/accessibility' },
]) {
  test(`${pageCase.name} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(pageCase.path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
