"use strict";
const {
    click,
    waitFor,
    focus,
    button,
    toRightOf, 
    textBox, 
    above,
    into, 
	write, 
	$,
	dropDown,
    fileField,
    timeField,
    attach,
    scrollTo,
    highlight,
    toLeftOf,
} = require('taiko');
var date = require("../util/date");
var taikoHelper = require("../util/taikoHelper")
step("Click OT Scheduling", async function() {
	await click("OT Scheduling")
});

step("Create a new surgical block", async function() {
	await click("New Surgical Block",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
});

step("Select the surgeon", async function() {
	await dropDown(toRightOf("Surgeon")).select(process.env.surgeon);
});

step("Select the theatre location", async function() {
	await click(process.env.OTLocation,toRightOf("Location"));
});

step("Select tomorrow as the theatre booking date", async function() {
    var startDate = date.tomorrow();
    startDate.setHours(11)
    startDate.setMinutes(0)
    var endDate = date.addMinutes(startDate,300)
	await timeField(toRightOf("Start Date-time")).select(startDate);
    await timeField(toRightOf("End Date-time")).select(endDate);
    
});


step("Enter procedure details", async function() {
    await write("Procedure",into(textBox(above("Est time"))));
});

step("Enter estimated time", async function() {
    await write("15", $("#estTimeMinutesID"))
});

step("Add surgery details", async function() {
	await click("Add");
});

step("Cancel the surgery", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await highlight(button("Cancel"),toRightOf(patientIdentifierValue));
    await waitFor(1000)
	await click("Cancel",toRightOf(patientIdentifierValue));
    await waitFor(patientIdentifierValue)
    await highlight("Cancel Surgery")
    await waitFor(1000)
    await click("Cancel Surgery");
});

step("Give reason", async function() {
	await write("reason",into(textBox({placeHolder:"enter reason"})));
});

step("Confirm cancellation", async function () {
	await click("Confirm");
});

step("Add surgery", async function() {
    await click("Add surgery");
});

step("Click doctor's OT schedule", async function() {
    await scrollTo("10:00 am")
	await click(process.env.surgeon)
});

step("Cancel surgeon's scheduled block", async function() {
    await waitFor(1000)
	await click("Cancel Block")
    await waitFor("This change will affect all surgeries of the block")
    await waitFor(1000)
    await click("Cancel Block",toRightOf("Postpone Block"))
});

step("Enter reason for surgical block cancellation", async function() {
	await write("reason",into(textBox({placeHolder:"enter reason"})));
});

step("Save OT data", async function() {
    await click("Save",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
	await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Enter Patient id / name", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await write(patientIdentifierValue,into(textBox({placeHolder:"Enter Patient ID/ Name"})));
    await click(`( ${patientIdentifierValue} )`)
});

step("Goto operation day", async function () {
    click(button(toRightOf("Today"),toLeftOf("Week")))
});

step("Edit doctor's OT schedule", async function() {
    await highlight(button("Edit"))
    await waitFor(1000)
    await click(button("Edit"))
});