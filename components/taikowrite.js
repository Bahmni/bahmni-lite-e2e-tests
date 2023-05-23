const { write, clear, near, textBox, into, toLeftOf, $, toRightOf, below, above } = require('taiko')


async function writeText(text) {
    await write(text);
  }

async function clearElement(value) {
    await clear($(value));
  }

 
async function writeIntoInputFieldNear(text,element) {
      await write(text, into(textBox(near(element))));
  }

async function writeIntoTextAreaToLeftOf(text,element) {
      await write(text, into(textBox(toLeftOf(element)))); 
  }

async function writeIntoTextAreaToRightOf(text,element) {
    await write(text, into(textBox(toRightOf(element)))); 
}

async function writeIntoTextAreaBelow(text,element) {
    await write(text, into(textBox(below(element)))); 
}

async function writeIntoTextAreaAbove(text,element) {
    await write(text, into(textBox(above(element)))); 
}

module.exports={
    writeText:writeText,
    clearElement:clearElement,
    writeIntoInputFieldNear:writeIntoInputFieldNear,
    writeIntoTextAreaToLeftOf:writeIntoTextAreaToLeftOf,
    writeIntoTextAreaToRightOf:writeIntoTextAreaToRightOf,
    writeIntoTextAreaBelow:writeIntoTextAreaBelow,
    writeIntoTextAreaAbove:writeIntoTextAreaAbove
}