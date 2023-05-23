const { getElements } = require('./selectors')
const assert = require('assert');
const {
  scrollTo,
  scrollUp,
  press,
  hover,
  dragAndDrop,
  $,
  currentURL,
  clear,
  setCookie,
  deleteCookies,
  tap,
  toLeftOf,
  evaluate,
  SearchElement,
} = require('taiko')
const URL = require('url').URL;

async function scrollToTable(table) {
    for (const element of getElements(table)) {
      await scrollTo(element);
    }
  }

async function scrollUpTable(table) {
    for (const element of getElements(table)) {
      await scrollUp(element);
    }
  }

async function pressKey(key) {
    await press(key);
  }

async function hoverOnElement(table) {
    for (const element of getElements(table)) {
      await hover(element);
    }
  }

async function dragSourceToDestination(source, destination) {
    await dragAndDrop($(source), $(destination));
  }

async function dragSourceToDirection(source, directionTable) {
    const direction = {};

    directionTable.getTableRows().forEach((row) => {
      direction[row.getCellValues()[0]] = parseInt(row.getCellValues()[1]);
    });
    await dragAndDrop($(source), direction);
  }

async function assertUrlOfHost(hostName) {
    const url = await currentURL();
    assert.equal(new URL(url).hostname, hostName);
  }

async function assertPageNavigatedBack(hostName) {
    const url = await currentURL();
    assert.equal(new URL(url).hostname, hostName);
  }

async function assertPageNavigatedToTarget(target) {
    const url = await currentURL();
    assert.equal(new URL(url).pathname, target);
  }

async function tapOnElement(arg0) {
    await tap(arg0);
  }

async function assertTapOnScreen() {
    function getResult() {}
    const touch = await evaluate(() => getResult());
    assert.deepEqual(touch, ['Touchstart: 0', 'Touchend: 0']);
  }

async function clearTextarea(table) {
    for (const element of getElements(table)) {
      await clear(toLeftOf(element));
    }
  }

async function setCookieWithKeyValue(key, value) {
    await setCookie(key, value, { url: 'http://localhost:3001/' });
  }

async function deleteCookieWithKey(key) {
    await deleteCookies(key, { url: 'http://localhost:3001/' });
  }
module.exports={
    scrollToTable:scrollToTable,
    scrollUpTable:scrollUpTable,
    pressKey:pressKey,
    hoverOnElement:hoverOnElement,
    dragSourceToDestination:dragSourceToDestination,
    dragSourceToDirection:dragSourceToDirection,
    assertUrlOfHost:assertUrlOfHost,
    assertPageNavigatedBack:assertPageNavigatedBack,
    assertPageNavigatedToTarget:assertPageNavigatedToTarget,
    tapOnElement:tapOnElement,
    assertTapOnScreen:assertTapOnScreen,
    clearTextarea:clearTextarea,
    setCookieWithKeyValue:setCookieWithKeyValue,
    deleteCookieWithKey:deleteCookieWithKey
}