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
    currentURL,
  } =require('taiko')
const cwd = process.cwd();


 async function switchTabWithURL(title) {
    await switchTo(title);
  }

  async function openTab(url) {
    await openTab(url);
  }

  async function openTabWithName(tabName) {
    await openTab({ name: tabName });
  }

  async function switchToWithName(tabName) {
    await switchTo({ name: tabName });
  }

  async function closeTabWithURL(url) {
    await closeTab(url);
  }

  async function closeTab() {
    await closeTab();
  }

  async function reloadPage() {
    await reload();
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

  async function emulateDevice(deviceModel) {
    await emulateDevice(deviceModel);
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

  module.exports={
    switchTabWithURL:switchTabWithURL,
    openTab:openTab,
    openTabWithName:openTabWithName,
    switchToWithName:switchToWithName,
    closeTabWithURL:closeTabWithURL,
    closeTab:closeTab,
    reloadPage:reloadPage,
    navigateToFileWithRelativePath:navigateToFileWithRelativePath,
    overrideBrowserPermission:overrideBrowserPermission,
    setLocationWithLatAndLong:setLocationWithLatAndLong,
    emulateDevice:emulateDevice,
    navigateBack:navigateBack,
    navigateForward:navigateForward,
    setTimeZone:setTimeZone

  }