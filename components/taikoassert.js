const assert = require('assert');
import { getElements } from './selectors';
import { title, text, textBox, toLeftOf, evaluate } from 'taiko';

async function assertTitle(userTitle) {
    assert.ok((await title()).includes(userTitle));
  }
async function assertExists(table) {
    for (const element of getElements(table)) {
      assert.ok(await element.exists());
    }
  }

 async function assertTextToBeEmpty(table) {
    for (const element of getElements(table)) {
      assert.equal(await element.text(), '');
    }
  }

 async function assertTextExists(content) {
    assert.ok(await text(content).exists());
  }

 async function assertTextDoesNotExists(content) {
    assert.ok(!(await text(content).exists(0, 0)));
  }

 async function assertTextExistsOnTextArea(expectedText, table) {
    for (const element of getElements(table)) {
      const actualText = await textBox(toLeftOf(element)).value();
      assert.equal(actualText, expectedText.trim());
    }
  }

async function assertPageHasSetTimezone() {
    const getTime = await evaluate(() => {
      return new Date(1479579154987).toString();
    });
    assert.equal(getTime, 'Sat Nov 19 2016 13:12:34 GMT-0500 (Eastern Standard Time)');
  }

  async function assertUrl(url) {
    const currentUrl = await currentURL();
    assert.equal(currentUrl, url);
  }

  async function assertCookies() {
    const cookies = await getCookies();
    assert.ok(cookies.length > 0);
  }

  async function assertCookiesWithOptions(arg) {
    const cookies = await getCookies({ urls: [arg] });
    assert.ok(cookies.length > 0);
  }

  async function assertCookieWithInvalidOption(arg) {
    const cookies = await getCookies({ urls: [arg] });
    assert.ok(cookies.length === 0);
  }

  async function assertGeoLocation(longitude, latitude) {
    const geolocation = await evaluate(
      () =>
        new Promise((resolve) =>
          navigator.geolocation.getCurrentPosition((position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }),
        ),
    );
    assert.equal(geolocation.longitude, parseFloat(longitude));
    assert.equal(geolocation.latitude, parseFloat(latitude));
  }

  async function assertWidthAndHeight(width, height) {
    const innerWidth = await evaluate(() => window.innerWidth);
    const innerHeight = await evaluate(() => window.innerHeight);
    assert.equal(innerWidth, width);
    assert.equal(innerHeight, height);
  }
module.exports={
  assertTitle:assertTitle,
  assertTextToBeEmpty:assertTextToBeEmpty,
  assertExists:assertExists,
  assertTextExists:assertTextExists,
  assertTextExistsOnTextArea:assertTextExistsOnTextArea,
  assertTextDoesNotExists:assertTextDoesNotExists,
  assertPageHasSetTimezone:assertPageHasSetTimezone,
  assertUrl:assertUrl,
  assertCookies:assertCookies,
  assertCookiesWithOptions:assertCookiesWithOptions,
  assertCookieWithInvalidOption:assertCookieWithInvalidOption,
  assertGeoLocation:assertGeoLocation,
  assertWidthAndHeight:assertWidthAndHeight

}