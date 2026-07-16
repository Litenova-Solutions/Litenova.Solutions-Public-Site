import { expect, test } from '@playwright/test';

test('crawl and agent-discovery endpoints publish the complete static site', async ({
  isMobile,
  request,
}) => {
  test.skip(Boolean(isMobile), 'One project is sufficient for static endpoint verification.');

  const robotsResponse = await request.get('/robots.txt');
  expect(robotsResponse.ok()).toBe(true);
  const robots = await robotsResponse.text();
  expect(robots).toContain('Allow: /');
  expect(robots).toContain('Sitemap: https://www.litenova.solutions/sitemap.xml');

  const sitemapResponse = await request.get('/sitemap.xml');
  expect(sitemapResponse.ok()).toBe(true);
  const sitemap = await sitemapResponse.text();
  const publicUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  expect(publicUrls.length).toBeGreaterThanOrEqual(74);

  for (const publicUrl of publicUrls) {
    const url = new URL(publicUrl);
    expect(url.origin).toBe('https://www.litenova.solutions');
    const response = await request.get(`${url.pathname}${url.search}`);
    expect(response.status(), `Expected a successful response for ${url.pathname}`).toBe(200);
  }

  const manifestResponse = await request.get('/manifest.webmanifest');
  expect(manifestResponse.ok()).toBe(true);
  expect((await manifestResponse.json()).name).toBe('Litenova Solutions');

  const imageResponse = await request.get('/opengraph-image');
  expect(imageResponse.ok()).toBe(true);
  expect(imageResponse.headers()['content-type']).toContain('image/png');
  expect((await imageResponse.body()).byteLength).toBeGreaterThan(10_000);

  for (const path of ['/llms.txt', '/llms-full.txt']) {
    const response = await request.get(path);
    expect(response.ok()).toBe(true);
    expect(await response.text()).toContain('Engineering Standards v1.0.0');
  }

  const searchResponse = await request.get('/Standards/api/search');
  expect(searchResponse.ok()).toBe(true);
  expect(searchResponse.headers()['content-type']).toContain('application/json');
});
