import { defineConfig, devices } from '@playwright/test';

const localBaseUrl = 'http://127.0.0.1:3000';
const externalBaseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: externalBaseUrl ?? localBaseUrl,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'desktop-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 7'] } },
  ],
  webServer: externalBaseUrl
    ? undefined
    : {
        command: 'pnpm start',
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
        url: localBaseUrl,
      },
});
