'use strict';
const { button, link, textBox, text, $ } = require('taiko')

function getElementWithSelector(element, selector) {
  let selectedElement = null;
  let selectedItem;
  try {
    selectedItem = JSON.parse(selector);
  } catch (err) {
    selectedItem = selector;
  }
  switch (element) {
    case 'link':
      selectedElement = link(selectedItem);
      break;
    case 'textBox':
      selectedElement = textBox(selectedItem);
      break;
    case 'text':
      selectedElement = text(selectedItem);
      break;
    case 'button':
      selectedElement = button(selectedItem);
      break;
    case '$':
      selectedElement = $(selectedItem);
      break;
  }
  return selectedElement;
}

function getElements(table) {
  const referenceElements = [];
  let headers = table.getColumnNames();
  table.getTableRows().forEach(function (row) {
    referenceElements.push(
      getElementWithSelector(row.getCell(headers[0]), row.getCell(headers[1])),
    );
  });
  return referenceElements;
}

module.exports={
    getElementWithSelector:getElementWithSelector,
    getElements:getElements
}