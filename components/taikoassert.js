'use strict';
const assert = require('assert');
const { title, text, textBox, toLeftOf, evaluate } = require('taiko')
const logHelper = require('../bahmni-e2e-common-flows/tests/util/logHelper');
var asserTTimeOut=parseInt(process.env.assertTimeOut)
async function assertTitle(userTitle) {
    assert.ok((await title()).includes(userTitle));
  }


  async function assertExists(element) {
    var check=await element.exists(500,asserTTimeOut)
    if(!check)
    {
      logHelper.error(element,' is not exists');
      assert.fail(element+' is not exists')
    }
  }

  async function assertNotExists(element) {
    var check=await element.exists(500,asserTTimeOut)
    if(check)
    {
      logHelper.error(element,' is exists');
      assert.fail(element+' is  exists')
    }
  }

 async function assertTextExists(content) {
    assert.ok(await text(content).exists(500,asserTTimeOut));
  }

 async function assertTextDoesNotExists(content) {
    assert.ok(!(await text(content).exists(500, asserTTimeOut)));
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

 function assertArray(actual,expected)
  {
    assert.ok(actual.includes(expected))
  }

function assertArrayPresence(list,value)
{
  assert.ok(list.includes(value))
}

function assertEquals(actual,expected )
{
  assert.equal(actual,expected)
}

function assertNotEmpty(text)
{
  assert.notEqual(text,'')
}
module.exports={
  assertTitle:assertTitle,
  assertTextExists:assertTextExists,
  assertArrayPresence:assertArrayPresence,
  assertTextDoesNotExists:assertTextDoesNotExists,
  assertPageHasSetTimezone:assertPageHasSetTimezone,
  assertUrl:assertUrl,
  assertCookies:assertCookies,
  assertCookiesWithOptions:assertCookiesWithOptions,
  assertCookieWithInvalidOption:assertCookieWithInvalidOption,
  assertGeoLocation:assertGeoLocation,
  assertWidthAndHeight:assertWidthAndHeight,
  assertArray:assertArray,
  assertExists:assertExists,
  assertNotExists:assertNotExists,
  assertEquals:assertEquals,
  assertNotEmpty:assertNotEmpty
}