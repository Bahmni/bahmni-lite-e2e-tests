const {
    openBrowser,
    closeBrowser,
    screenshot,
    reload,
    setConfig,
    closeTab,
    $,
} = require('taiko');
const path = require('path');
const taikoHelper = require("../util/taikoHelper")

const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({headless:headless, args:["--no-sandbox","--start-maximized","--disable-dev-shm-usage","--start-fullscreen",'--use-fake-ui-for-media-stream']})
    await setConfig( { ignoreSSLErrors: true});
});

afterSuite(async () => {
    try{
        await closeBrowser();        
    }catch(e){
        gauge.message(e.message)
    }
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

step("reload the page", async function () {
    await reload({waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
});

step("close tab", async function() {
	await closeTab()
});