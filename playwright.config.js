const { defineConfig, devices } = require('@playwright/test');

const environment = process.env.environment || 'prod'
const config = require(`./tests/support/environments/${environment}`)
const baseURLFront = config.baseUrl
const baseURIAPI = config.baseUri

module.exports = defineConfig({
  testDir: './tests',
 
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]], 

  use: {
    actionTimeout: 0,
    baseURL: baseURIAPI,
    
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
      use: { 
        ...devices['Desktop Chrome'],  
        baseURL: baseURLFront
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: baseURLFront 
      },
    }
  ]
})

