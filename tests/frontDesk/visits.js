/* globals gauge*/
"use strict";
const {
    $,
    click,
    button,
    toRightOf,
    text,
    toLeftOf,
    within,
    write,
    into,
    textBox,
    scrollTo
} = require('taiko');
var taikoHelper = require("../util/taikoHelper");
var fileExtension = require("../util/fileExtension")
var assert = require('assert')
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

step("verify name with id", async function() {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    var lastName = gauge.dataStore.scenarioStore.get("patientLastName")
    var middleName = gauge.dataStore.scenarioStore.get("patientMiddleName")
	var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");

    assert.ok(await (await text(`${firstName} ${lastName} (${patientIdentifierValue})`,toLeftOf("Female"))).exists())
});

step("verify OPD", async function() {
//    await highlight("23 Feb 22",toLeftOf("OPD"));
});

step("verify prescription", async function () {
    await taikoHelper.repeatUntilNotFound($(".dashboard-section-loader"))
    var prescriptionFile = gauge.dataStore.scenarioStore.get("prescriptions")
    var medicalPrescriptions = JSON.parse(fileExtension.parseContent(prescriptionFile))
    assert.ok(await (await text(medicalPrescriptions.drug_name)).exists())
    assert.ok(await (await text(`${medicalPrescriptions.dose} ${medicalPrescriptions.units}, ${medicalPrescriptions.frequency}`)).exists())
    assert.ok(await (await text(`${medicalPrescriptions.duration} Day(s)`)).exists())
});

step("verify vitals", async function() {
    assert.ok(await (await text("99",toRightOf("SPO2"))).exists())
    assert.ok(await (await text("99",toRightOf("RR"))).exists())
    assert.ok(await (await text("99",toRightOf("Temperature"))).exists())
    assert.ok(await (await text("110",toRightOf("Diastolic"))).exists())
    assert.ok(await (await text("110",toRightOf("Systolic"))).exists())
    assert.ok(await (await text("Sitting",toRightOf("Posture"))).exists())
    assert.ok(await (await text("70",toRightOf("Pulse"))).exists())
    assert.ok(await (await text("1",toRightOf("Haemogram"))).exists())
});