const {
    openBrowser,
    closeBrowser,
    screenshot,
    reload,
    setConfig
} = require('taiko');
const path = require('path');

const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({headless:headless, args:["--no-sandbox","--start-maximized","--disable-dev-shm-usage","--start-fullscreen"]})
    await setConfig( { ignoreSSLErrors: true});
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("reload the consent request page", async function () {
    await reload(process.env.bahmniHost+process.env.hiuURL, { navigationTimeout: 10000 })
});