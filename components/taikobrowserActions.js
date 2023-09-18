const {
    switchTo,
    openTab,
    closeTab,
    reload,
    goto,
    overridePermissions,
    setLocation,
    evaluate,
    emulateDevice,
    goBack,
    goForward,
    getCookies,
    emulateTimezone,
    currentURL,alert,accept,confirm
  } =require('taiko')
const cwd = process.cwd();


async function navigateTo(url) {
  await goto(url,{ waitForNavigation: true});
}
 async function switchTab(title) {
    await switchTo(title);
  }

  async function reloadTab() {
    await reload({ waitForEvents: ['DOMContentLoaded'] })
  }

  async function switchToWithName(tabName) {
    await switchTo({ name: tabName });
  }

  async function reloadPage() {
    await reload({ waitForEvents: ['DOMContentLoaded','targetNavigated'] })
  }

  async function navigateToFileWithRelativePath(filePath) {
    await goto('file:///' + cwd + filePath);
  }

  async function overrideBrowserPermission(geolocation, url) {
    await overridePermissions(url, [geolocation]);
  }

  async function setLocationWithLatAndLong(longitude, latitude) {
    await setLocation({
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude),
    });
  }


  async function navigateBack() {
    await goBack();
  }

  async function navigateForward() {
    await goForward();
  }

  async function setTimeZone(arg0) {
    await emulateTimezone(arg0);
  }
async function acceptAlert(text) {
   confirm(text, async () => await accept())
}
  module.exports={
    navigateTo:navigateTo,
    switchTab:switchTab,
    acceptAlert:acceptAlert,
    switchToWithName:switchToWithName,
    reloadPage:reloadPage,
    navigateToFileWithRelativePath:navigateToFileWithRelativePath,
    overrideBrowserPermission:overrideBrowserPermission,
    setLocationWithLatAndLong:setLocationWithLatAndLong,
    navigateBack:navigateBack,
    navigateForward:navigateForward,
    setTimeZone:setTimeZone,
    reloadTab:reloadTab

  }