const { alert, accept, prompt } = require('taiko');
const assert = require('assert');

  async function  alertAndAwait(text) {
    alert(text, async () => {
      await accept();
    });
  }

  async function promptAndAccept(message, text) {
    prompt(message, async () => await accept(text));
  }

  async function checkAlertAccepted() {
    assert.ok(scenarioStore.get('alert-text'));
  }

  module.exports={
    alertAndAwait:alertAndAwait,
    promptAndAccept:promptAndAccept,
    checkAlertAccepted:checkAlertAccepted

  }