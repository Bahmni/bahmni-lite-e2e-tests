'use strict';
const {
  link,
  click,
  button,
  rightClick,
  doubleClick,
  mouseAction,
  $,
  SearchElement,
  text,
  near,
  write,
  textBox,
  toRightOf,
} =require('taiko')

async function Click(type,value,relativeLocator){

switch(type){
  case 'link':
      clickLink(value,relativeLocator)
      break
  case 'text':
      clickText(value,relativeLocator)
      break
  case 'button':
      clickButton(value,relativeLocator)
      break
  case 'near':
      clickNear(value,relativeLocator)
      break
  default:
      await click(value)
      console.log('Default click is used')
    
}

async function Write(type,value,relativeLocator)
{
  switch(type){
    case 'into':
      writeInto(value,relativeLocator)
      break
    default:
      await write(value)
      console.log("Default write is used")

  }
}

async function writeInto(value,relativeLocator)
{
  if(relativeLocator)
  await write(value)
  else
  await write(value,into(textBox(relativeLocator)))
}
}
async function clickLink(value,relativeLocator)
{
  if(relativeLocator)
  await click(link(value))
  else
  await click(link(value),relativeLocator)
}

async function clickText(value,relativeLocator)
{
  if(relativeLocator)
  await click(text(value))
  else
  await click(text(value),relativeLocator)
}

async function clickButton(value,relativeLocator)
{
  if(relativeLocator)
  await click(button(value))
  else
  await click(button(value),relativeLocator)
}

async function clickNear(value,relativeLocator)
{
  if(relativeLocator)
  await click(near(value))
  else
  await click(near(value),relativeLocator)
}

async function clickRight(element) {
      await rightClick(element);
  }

async function clickDouble(element) {
      await doubleClick(element);
  }

async function pressAndReleaseElement1(X, Y) {
    await mouseAction($('#button1'), 'press', {
      x: parseInt(X),
      y: parseInt(Y),
    })
    await mouseAction($('#button1'), 'release', {
        x: parseInt(X),
        y: parseInt(Y),
      })
    }

async function pressAndReleaseElement2(X, Y) {
        await mouseAction($('#button4'), 'press', {
          x: parseInt(X),
          y: parseInt(Y),
        });
        await mouseAction($('#button4'), 'release', {
          x: parseInt(X),
          y: parseInt(Y),
        });
      }

async function pressAndReleaseElement(X, Y) {
        await mouseAction('press', {
          x: parseInt(X),
          y: parseInt(Y),
        });
        await mouseAction('release', {
          x: parseInt(X),
          y: parseInt(Y),
        });
      }

module.exports={
    Click:Click,
    rightClick:clickRight,
    doubleClick:clickDouble,
    pressAndReleaseElement1:pressAndReleaseElement1,
    pressAndReleaseElement2:pressAndReleaseElement2,
    pressAndReleaseElement:pressAndReleaseElement

}
