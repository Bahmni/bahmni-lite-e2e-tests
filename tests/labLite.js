const {
    click,
    button,
    text,
    press,
    write,
    waitFor
} = require('taiko');
var assert = require("assert");

step("start patient serach", async function() {
	await click(button({"aria-label":"Search Patient"}))
});

step("enter the patient name in lablite", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
	await write(patientIdentifierValue,{"placeholder":"Search for a patient by name or identifier number"});
    await click(button("Search"))
});

step("open patient details in sidePanel", async function() {
    var patientFirstName = gauge.dataStore.scenarioStore.get("patientFirstName");
    var patientMiddleName = gauge.dataStore.scenarioStore.get("patientMiddleName");
    var patientLastName = gauge.dataStore.scenarioStore.get("patientLastName");

    assert.ok(await text("Found 1 patient").exists())
    await click(`${patientFirstName} ${patientMiddleName} ${patientLastName}`)
});