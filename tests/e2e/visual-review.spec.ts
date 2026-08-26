import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import standardsManifest from '../../standards/standards.manifest.json' with { type: 'json' };

test.describe('visual review artifacts', () => {
  test.skip(
    process.env.CAPTURE_SCREENSHOTS !== 'true',
    'Set CAPTURE_SCREENSHOTS=true to write review screenshots.',
  );

  test('captures the primary public surfaces', async ({ page }) => {
    const screenshotDirectory = path.resolve('test-results', 'screenshots');
    await mkdir(screenshotDirectory, { recursive: true });

    for (const pageCase of [
      { name: 'home-desktop', path: '/' },
      { name: 'standards-desktop', path: '/Standards' },
    ]) {
      await page.goto(pageCase.path);
      await expect(page.locator('h1')).toBeVisible();
      const animatedContent = page.locator('.animate-fade-in');
      if ((await animatedContent.count()) > 0) {
        await expect(animatedContent.first()).toHaveCSS('opacity', '1');
      }
      await page.screenshot({
        path: path.join(screenshotDirectory, `${pageCase.name}.png`),
        fullPage: true,
      });
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.animate-fade-in').first()).toHaveCSS(
      'opacity',
      '1',
    );
    await page.screenshot({
      path: path.join(screenshotDirectory, 'home-mobile.png'),
      fullPage: true,
    });

    await page.goto('/Standards');
    await expect(
      page.getByText(`Released Baseline v${standardsManifest.version}`),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDirectory, 'standards-mobile.png'),
      fullPage: true,
    });
  });
});
