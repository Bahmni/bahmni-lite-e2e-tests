'use strict';
const {
  link,
  click,
  below,
  button,
  above,
  toRightOf,
  rightClick,
  doubleClick,
  mouseAction,
  $,
  SearchElement,
  toLeftOf,
} =require('taiko')

async function clickLinkBelow(userlink,element) {
      await click(link(userlink, below(element)));
    }

async function clickLinkAbove(userlink,element) {
      await click(link(userlink, above(element)));
    }

async function clickLinkRightTo(userlink,element) {
      await click(link(userlink, toRightOf(element)));
    }
  
async function clickLinkLeftTo(userlink,element) {
      await click(link(userlink, toLeftOf(element)));
    }

async function clickText(text) {
    await click(text);
  }

async function clickLink(element) {
    await click(link(element));
  }

async function clickLinkWithText(element) {
    await click(link(text(element)));
  }

async function clickElement(element) {
    await click(element);
  }

async function clickLinkAbove(element) {
      await click(link(above(element)));
  }

async function clickButtonToRightOf(element) {
      await click(button(toRightOf(element)));
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
    clickLinkBelow:clickLinkBelow,
    clickLinkRightTo:clickLinkRightTo,
    clickLinkLeftTo:clickLinkLeftTo,
    clickText:clickText,
    clickLinkWithText:clickLinkWithText,
    clickLink:clickLink,
    clickElement:clickElement,
    clickLinkAbove:clickLinkAbove,
    clickButtonToRightOf:clickButtonToRightOf,
    rightClick:rightClick,
    doubleClick:doubleClick,
    pressAndReleaseElement1:pressAndReleaseElement1,
    pressAndReleaseElement2:pressAndReleaseElement2,
    pressAndReleaseElement:pressAndReleaseElement

}
