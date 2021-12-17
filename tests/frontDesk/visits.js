/* globals gauge*/
"use strict";
const {
    $,
    click,
    button,
    toRightOf,
    within,
    write,
    into,
    textBox,
    scrollTo
} = require('taiko');
var taikoHelper = require("../util/taikoHelper");

step("Click Start IPD Visit", async function() {
    await scrollTo("Start OPD Visit")
    await click(button(toRightOf('Start OPD Visit'), within($(".submit-btn-container"))));
    await click('Start IPD visit',{waitForNavigation:true})
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Click Start OPD Visit", async function () {
    await scrollTo("Start OPD Visit")
    await click("Start OPD Visit",{waitForNavigation:true});
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Search the newly created patient", async function () {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await write(patientIdentifierValue, into(textBox({ "placeholder": "Search Name/Patient Identifier  ..." })))
    await click('Search',{waitForNavigation:true})
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});
