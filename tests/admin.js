"use strict";
const {
    goto,
    write,
    above,
    dropDown,
    click,
    into,
    below,
    waitFor,
    checkBox,
    textBox,
    toLeftOf,
    alert,
    $,
    text,
    attach,
    dragAndDrop,
    confirm,
    accept,
    button,
    near,
    link,
    press,
    doubleClick,
    toRightOf,
    highlight,
    mouseAction,
    currentURL,
    radioButton,
    fileField,
    tableCell,
} = require('taiko');

const path = require('path');
var assert = require("assert");
var taikoHelper = require("./util/taikoHelper");
var users = require("./util/users");
const csvConfig=require("./util/csvConfig");
const { selectEntriesTillLoopEnds } = require('./util/taikoHelper');


step("Goto Bed creation", async function() {
	await click("Beds");
});

step("Goto Admin home", async function () {
	await click(link(toLeftOf("Admission Locations")));
});

step("Goto Dictionary", async function() {
	await click("Dictionary")
});

step("Open <submodule>", async function(submodule) {
	await click(submodule);
});

step("Open patient2 details by search", async function () {
	var patientIdentifierValue = gauge.dataStore.scenarioStore.get("merge_patientIdentifier2");
	gauge.message(patientIdentifierValue)
	await write(patientIdentifierValue)
    await press('Enter', {waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
    await taikoHelper.repeatUntilNotFound($("#overlay"))
    try{
        await click(link(patientIdentifierValue))        
    }catch(e){}
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

step("create obs <obsName> <properties>", async function(obsName,properties) {
	await dragAndDrop("Obs",$(".form-builder-row"));
	await click("Select Obs Source")
	await write(obsName,into(textBox(below("Control Properties"))))
	await press('Enter')
	await click(obsName)
	for (var row of properties.rows) {
        await click(checkBox(toRightOf(row.cells[0])));
    }
});

step("create obs group <obsName>", async function(obsName) {
	await dragAndDrop("ObsGroup",$(".form-builder-row"));
	await click("Select ObsGroup Source")
	await write(obsName,into(textBox(below("Control Properties"))))
	await press('Enter')
});

step("create a section", async function() {
	await dragAndDrop("Section",$(".form-builder-row"));
});

step("Create an appointment location if it doesn't exist", async function() {
	if(await link(process.env.appointmentLocation).exists())
		return
	await click("Add Location")
	await write(process.env.appointmentLocation,into(textBox(toRightOf("Name"))))
	await click(checkBox(toLeftOf("Appointment Location")))
	await click("Save Location",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout})
});

step("Add a new concept", async function() {
	await click("Add new concept",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
});

step("enter a concept name", async function () {
	var drugName = users.randomName(10)
	await write(drugName,into(textBox(above("Synonyms"),below("English"))));
	gauge.message(drugName)
    gauge.dataStore.scenarioStore.put("Drug Concept",drugName)
});

step("enter a description", async function() {
	await write("For automation",into(textBox(toRightOf("Description"),below("Short Name"))));
});

step("make it saleable", async function() {
	await click("True",toRightOf("saleable"));
});

step("select the type of concept being created as <conceptType>", async function (conceptType) {
	await dropDown(toRightOf("Class")).select(conceptType);
});

step("save the concept", async function() {
	await click("Save Concept");
});

step("Create a drug with more details", async function() {
	var _currentURL = await currentURL();
	await click("Administration");
    await click("Manage Concept Drugs");
    await click("Add Concept Drug");
	var drugName = users.randomName(10)

	await write(drugName,into(textBox(toRightOf("Name"),above("Concept"))));
    gauge.dataStore.scenarioStore.put("Drug Name",drugName)

	var drugConcept = gauge.dataStore.scenarioStore.get("Drug Concept")
    await write(drugConcept,into(textBox({placeHolder:"Enter concept name or id"})));

	await click("Save Concept Drug");
});

step("Goto Manage Address Hierarchy", async function() {
	await click("Manage Address Hierarchy",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
});

step("Goto reporting", async function() {
	await click("Reporting")
});

step("Goto Report Administration", async function() {
	await click("Report Administration")
});

step("Create Period Indicator Report", async function () {
	await click("Period Indicator Report")
	await write(users.randomName(10),below("Name"))
	await click("Submit")
});

step("Add Period Indicator Details", async function() {
	await click("Add Dimension")
	await write(users.randomName(10),into(textBox(toRightOf("Key"))))
	await click("Submit")
});
step("select profile type <profile>", async function(profile) {
    await radioButton(above(profile)).select();
});
step("upload file for <profile> profile",async function(profile) {
        try{
            await attach(await csvConfig.generateUpdatedCSV(profile),fileField({id:"inputFileUpload"}));            
        }
        catch(e){
            console.error(e);
        }
        await waitFor(2000)
        await click(button("Upload"))       
});
step("verify upload status <profile> data",async function(profile) {

    await click(button("Refresh")); 
    if(await text(profile.toLowerCase()+'.csv',near("Name")).exists()){
            assert.ok(await text('COMPLETED',near("Status")).exists());
    }
    alert(/^can not be represented as java.sql.Timestamp]9.*$/, async () => await accept())
});


step("Verify bulk <profile> data upload",async function(profile) {
    var dataLength=gauge.dataStore.scenarioStore.get("fileDataLength")-1;
    let recordSeq=0;
    while(recordSeq<dataLength){ 
        const csvAsJson =(await csvConfig.getCSVasJson(profile.toLowerCase()))[recordSeq];
        await taikoHelper.selectEntriesTillLoopEnds(recordSeq);
        switch(profile){
            case "Patient":
                assert.ok(await text(csvAsJson['Registration Number']).exists());
                assert.ok(await text(csvAsJson['First Name'],toRightOf("Patient Name")).exists());
                assert.ok(await text(csvAsJson['Middle Name'],toRightOf("Patient Name")).exists());
                assert.ok(await text(csvAsJson['Last Name'],toRightOf("Patient Name")).exists());
                assert.ok(users.getGender(csvAsJson.Gender)==users.getGender(await dropDown(toRightOf("Gender")).value()));
                assert.ok(await text(csvAsJson.Address.Village,toRightOf("Village")).exists());
                assert.ok(await text(csvAsJson.Address.Tehsil,toRightOf("Tehsil")).exists());
                assert.ok(await text(csvAsJson.Address.District,toRightOf("District")).exists());
                assert.ok(await text(csvAsJson.Address.State,toRightOf("State")).exists()); 
                await click(link("Search"));
                break;
            case "Encounter":
                assert.ok(await text(csvAsJson.visitType).exists());
                await click(link(below("Visits")));
                assert.ok(await text(csvAsJson['Registration Number']).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['Hospital Course'],toRightOf("Hospital Course")).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['Chief Complaint Duration'],toRightOf("Chief Complaint Duration")).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['Examination Notes'],toRightOf('Examination Notes')).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['History Notes'],toRightOf("History Notes")).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['Chief Complaint Notes'],toRightOf("Chief Complaint Notes")).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['Smoking History'],toRightOf("Smoking History")).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Obs']['Consultation Note'],toRightOf("consultation note")).exists());
                assert.ok(await text(csvAsJson.Repeat['1']['Diagnosis']['1'],below("Diagnoses")).exists());
                await click($('.back-btn'),{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
                break;
        }        
        recordSeq++;
    } 
    });



