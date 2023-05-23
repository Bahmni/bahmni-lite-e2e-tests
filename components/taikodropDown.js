'use strict';
const assert = require('assert');
import { getElements } from './selectors';

import { dropDown, near } from 'taiko';

async function selectValues(value, table) {
    for (const element of getElements(table)) {
      assert.ok(await element.exists());
      await dropDown(near(element, { offset: 50 })).select(value);
    }
  }

module.exports={
    selectValues:selectValues
}