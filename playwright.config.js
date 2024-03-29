const { defineConfig, devices } = require('@playwright/test');

const environment = process.env.environment || 'dev'
const config = require(`./tests/support/environments/${environment}`)
const baseURLFront = config.baseUrl
const baseURIAPI = config.baseUri

module.exports = defineConfig({
  testDir: './tests',
 
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    actionTimeout: 0,
    baseURL: baseURLFront,
    
    viewport: {
      width: 1280,
      height: 720
    },

    screenshot: 'on',
    video: 'on',
    headless: true,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});

