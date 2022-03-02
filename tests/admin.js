"use strict";
const {
    goto,
    write,
    click,
    into,
    below,
    waitFor,
	checkBox,
	textBox,
	toLeftOf,
	$,
	text,
	dragAndDrop,
	confirm,
	accept,
	button,
	link,
	press,
	doubleClick,
	toRightOf,
	highlight,
	mouseAction,
} = require('taiko');
var assert = require("assert");
var users = require("./util/users")
var taikoHelper = require("./util/taikoHelper")
step("Add this newly created patient as merge patient1", async function() {
    gauge.dataStore.scenarioStore.put("merge_patientIdentifier1", gauge.dataStore.scenarioStore.get('patientIdentifier'));
});

step("Add this newly created patient as merge patient2", async function() {
	gauge.dataStore.scenarioStore.put("merge_patientIdentifier2", gauge.dataStore.scenarioStore.get('patientIdentifier'));
});

step("Find patients to merge", async function() {
	await click("Find Patients to Merge",{waitForNavigation:true,navigationTimeout:process.env.mergeTimeout});
});

step("Enter patient identifiers to be merged", async function() {
	var patientsToBeMerged = gauge.dataStore.scenarioStore.get("merge_patientIdentifier1")+","+gauge.dataStore.scenarioStore.get("merge_patientIdentifier2")
	await write(patientsToBeMerged,into(textBox(below("Identifier"))))
	await click("Search",below(patientsToBeMerged))
});

step("Select the patients to be merged", async function() {
	await click(checkBox(toLeftOf(gauge.dataStore.scenarioStore.get("merge_patientIdentifier1"))))
	await click(checkBox(toLeftOf(gauge.dataStore.scenarioStore.get("merge_patientIdentifier2"))))
	await click('Continue')
});

step("Merge patients", async function() {
	await waitFor(async () => !(await $("Loading...").exists()))
	await confirm('Are you sure you want to merge these patients?', async () => await accept())	
	await click(button("Merge Patients"))
//	await waitFor(async () => (await text("Patients merged successfully").exists()))
});

step("Goto Bed creation", async function() {
	await click("Beds");
});

step("Goto Admin home", async function () {
	await click(link(toLeftOf("Admission Locations")));
});

step("Goto Administration", async function() {
	await click("Administration")
});

step("Open patient2 details by search", async function () {
	var patientIdentifierValue = gauge.dataStore.scenarioStore.get("merge_patientIdentifier2");
	await write(patientIdentifierValue)
    await press('Enter', {waitForNavigation:true});
    await taikoHelper.repeatUntilNotFound($("#overlay"))

});

step("Verify patient1 details are open", async function() {
	var patientIdentifier = await $('#patientIdentifierValue').text();
	var patientIdentifierValue = gauge.dataStore.scenarioStore.get("merge_patientIdentifier1");
	assert.ok(patientIdentifier==patientIdentifierValue) 
});

step("Open Form builder", async function() {
	await click("Form Builder");
});

step("Create a form", async function() {
	await click("Create a Form");
});

step("Enter form name", async function() {
	var formName = users.randomName(10)
	gauge.dataStore.scenarioStore.put("FormName",formName)
	await write(formName,into(textBox(below("Form Name"))));
});

step("start creating a form", async function() {
	await click("Create Form");
});

step("put formname <formName>", async function(formName) {
	gauge.dataStore.scenarioStore.put("FormName",formName)
});

step("edit form <formName>", async function(formName) {
	await click(link(toRightOf(formName)))
});

step("create obs <obsName>", async function(obsName) {
	await dragAndDrop("Obs",$(".form-builder-row"));
	await click("Select Obs Source")
	await write(obsName,into(textBox(below("Control Properties"))))
	await press('Enter')
});