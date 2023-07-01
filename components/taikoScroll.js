'use strict';
const assert = require('assert');
const _path = require('path');
const {
    goto,
    $,
    fileField,
    textBox,
    button,
    dropDown,
    checkBox,
    radioButton,
    range,
    click,
    write,
    attach,
    focus,
    scrollTo,
    scrollRight,
    scrollLeft,
    scrollUp,
    scrollDown,
    to,
    into,
    dismiss,
    accept,
    intercept,
    toRightOf,
    alert,
    clearIntercept,
    SearchElement,
    DialogHandler,
  } =require=('taiko')

 async function navigate(url) {
    await goto(url);
  }

 async function navigateWithBasicAuth(url, username, password) {
    const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');
    await goto(url, {
      headers: { Authorization: `Basic ${encodedCredentials}` },
    });
  }

 async function dropdownExists(dropDownName) {
    const box = dropDown(dropDownName);
    assert.ok(await box.exists());
  }

 async function selectDropDownValue(value, dropDownName, fieldValue) {
    const box = dropDown(dropDownName);
    await box.select(value);
    assert.equal(await box.value(), fieldValue);
  }


 async function checkboxExists(checkBoxName) {
    const box = checkBox(checkBoxName);
    assert.ok(await box.exists());
  }

 async function checkboxValue(checkBoxName) {
    const box = checkBox(checkBoxName);
    await box.check();
    assert.ok(await box.isChecked());
  }

 async function radioBtn(label) {
    const button = radioButton(label);
    assert.ok(await button.exists());
    await button.select();
    assert.ok(await button.isSelected());
  }

 async function isRadioButtonChecked(label) {
    const button = radioButton(label);
    assert.ok(await button.isSelected());
  }

 async function rangeExists(rangeName) {
    const rangeInput = range(rangeName);
    assert.ok(await rangeInput.exists());
  }

 async function rangeValue(rangeName, rangeValue) {
    const rangeInput = range(rangeName);
    await rangeInput.select(rangeValue);
    assert.equal(await rangeInput.value(), rangeValue);
  }

 async function attachFile(fileName, FileFieldName) {
    const field = fileField(FileFieldName);
    await attach(fileName, to(field));
    assert.ok((await field.value()).endsWith(fileName));
  }

 async function getTextboxValue(text, textBoxName) {
    const field = textBox(textBoxName);
    assert.equal(await field.value(), text);
  }

 async function textBoxExists(textBoxName) {
    const field = textBox(textBoxName);
    assert.ok(await field.exists());
  }

 async function writeInto(text, textBoxName) {
    await write(text, into(textBoxName));
  }

 async function writeWithName(text, textBoxName) {
    await write(text, into(textBox({ name: textBoxName })));
  }

 async function writeTo(text, textBoxName) {
    await write(text, to(textBoxName));
  }

 async function focusToRightOf(textBoxName) {
    await focus(textBox(toRightOf(textBoxName)));
  }
 async function scrollPageByPixel(pixels) {
    await scrollRight(parseInt(pixels, 10));
  }

  async function scrollElement(element, pixels) {
    await scrollRight($(element), parseInt(pixels, 10));
  }

  async function leftScroll() {
    await scrollLeft();
  }

  async function waitForAccept(message, buttonName) {
    alert(message, async () => await accept());
    await click(button(buttonName));
  }

  async function waitForDismiss(message, buttonName) {
    alert(message, async () => await dismiss());
    await click(button(buttonName));
  }

  async function interceptResponse(url, responseBody) {
    await intercept(url, { body: responseBody });
  }

  async function respondJSON(url, jsonString) {
    await intercept(url, { body: JSON.parse(jsonString) });
  }

  async function interceptRequest(url, mockData) {
    await intercept(url, (request) => {
      request.continue({ postData: mockData });
    });
  }

 async function interceptRequestAndContinue(url) {
    await intercept(url, (request) => {
      request.continue();
    });
  }

 async function navigateToPath(relativePath) {
    const absolutePath = _path.resolve(relativePath);
    await goto('file:///' + absolutePath);
  }

 async function ScrollToElement(elementString) {
    await scrollTo($(elementString));
  }

 async function scrollPageLeftByPixel(pixels) {
    await scrollLeft(parseInt(pixels, 10));
  }

 async function scrollElementLeftByPixel(element, pixels) {
    await scrollLeft($(element), parseInt(pixels, 10));
  }

 async function rightScroll() {
    await scrollRight();
  }

 async function upScroll(pixels) {
    await scrollUp(parseInt(pixels, 10));
  }

 async function scrollElementUp(element, pixels) {
    await scrollUp($(element), parseInt(pixels, 10));
  }

 async function scrollPageUp() {
    await scrollUp();
  }

 async function scrollPageDownByPixel(pixels) {
    await scrollDown(parseInt(pixels, 10));
  }

async function scrollElementDown(element, pixels) {
    await scrollDown($(element), parseInt(pixels, 10));
  }

async function scrollPageDown() {
    await scrollDown();
  }

async function navigateToPathWithTimeout(path, timeout) {
    const absolutePath = _path.resolve(path);
    await goto('file:///' + absolutePath, {
      navigationTimeout: timeout,
    });
  }

async function navigateToURLWithTimeout(url, timeout) {
    await goto(url, { navigationTimeout: timeout });
  }

async function resetInterceptForURL(url) {
    clearIntercept(url);
  }

async function resetAllIntercept() {
    clearIntercept();
  }

async function pressEnter(){
  await press('Enter', { waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
}

module.exports={
    navigate:navigate,
    navigateWithBasicAuth:navigateWithBasicAuth,
    dropdownExists:dropdownExists,
    selectDropDownValue:selectDropDownValue,
    checkboxExists:checkboxExists,
    checkboxValue:checkboxValue,
    radioButton:radioButton,
    isRadioButtonChecked:isRadioButtonChecked,
    rangeExists:rangeExists,
    rangeValue:rangeValue,
    attachFile:attachFile,
    getTextboxValue:getTextboxValue,
    textBoxExists:textBoxExists,
    writeInto:writeInto,
    writeWithName:writeWithName,
    writeTo:writeTo,
    focusToRightOf:focusToRightOf,
    scrollPageByPixel:scrollPageByPixel,
    scrollElement:scrollElement,
    scrollLeft:scrollLeft,
    waitForAccept:waitForAccept,
    waitForDismiss:waitForDismiss,
    interceptResponse:interceptResponse,
    respondJSON:respondJSON,
    interceptRequest:interceptRequest,
    interceptRequestAndContinue:interceptRequestAndContinue,
    navigateToPath:navigateToPath,
    ScrollToElement:ScrollToElement,
    scrollPageLeftByPixel:scrollPageLeftByPixel,
    scrollElementLeftByPixel:scrollElementLeftByPixel,
    scrollRight:scrollRight,
    scrollUp:scrollUp,
    scrollElementUp:scrollElementUp,
    scrollPageUp:scrollPageUp,
    scrollPageDownByPixel:scrollPageDownByPixel,
    scrollElementDown:scrollElementDown,
    scrollPageDown:scrollPageDown,
    navigateToPathWithTimeout:navigateToPathWithTimeout,
    navigateToURLWithTimeout:navigateToURLWithTimeout,
    resetInterceptForURL:resetInterceptForURL,
    resetAllIntercept:resetAllIntercept,
    pressEnter:pressEnter
}