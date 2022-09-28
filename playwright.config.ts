import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'tests',
    use: {
        headless: true,
        viewport:{ width:1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit'}
        }
    ],
    testMatch: '**.spec.ts',
    reporter: [
        // ['json', { outputFile: `./reports/json/test-results-${Date.now()}.json` }],
        ['allure-playwright'],
        ['list'],
      ],
}

export default config