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
var users = require("./util/users")
var taikoHelper = require("./util/taikoHelper")
var fileExtension=require("./util/fileExtension")


step("Goto Bed creation", async function() {
	await click("Beds");
});

step("Goto Admin home", async function () {
	await click(link(toLeftOf("Admission Locations")));
});

step("Goto Dictionary", async function() {
	await click("Dictionary")
});

 
step("Open feature <submodule>", async function(submodule) {
	await click(submodule)
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
    await radioButton({id:profile.toLowerCase()}).select()
});

step("upload file for <profile> profile",async function(profile) {
    let filepath="./data/admin/profileUpload/";
        try{
            if(profile=='Patient'){
                var RegId='BAH-'+users.randomNumber(10000,1000000);
                gauge.dataStore.scenarioStore.put("patientIdentifier",RegId);
                console.log(gauge.dataStore.scenarioStore.get("patientIdentifier"));
                await fileExtension.modifyCsvContent(filepath+profile.toLowerCase()+'.csv','Registration Number',
                RegId);
            }
            else if(profile=='Encounter'){
                    await fileExtension.modifyCsvContent(filepath+profile.toLowerCase()+'.csv','Registration Number',
                    gauge.dataStore.scenarioStore.get("patientIdentifier"));
                }
            await attach(path.join(filepath,profile.toLowerCase()+'.csv'),
                                fileField({id:"inputFileUpload"}));
            
        }
        catch(e){
            console.error(e);
        }
        await waitFor(2000)
        await click(button("Upload"))       
});
step("verify upload status <profile> data",async function(profile) {

    await click(button("Refresh"));

    var fileName= await tableCell({row:1, col:1}).text();
    var uploadDate = await tableCell({row:1, col:2}).text();
    var uploadStatus = await tableCell({row:1, col:3}).text();
    try{
        if(fileName==profile.toLowerCase()+'.csv'){
            assert.ok(uploadStatus=='COMPLETED');
            gauge.dataStore.scenarioStore.put(profile+"UploadDate",uploadDate);
        }
    }
    catch(e){
        console.error(e)
    }
    //console.log(gauge.dataStore.scenarioStore.get(profile+"UploadDate"))
    alert(/^can not be represented as java.sql.Timestamp]9.csv.*$/, async () => await accept())
});

async function getCSVobj(profile) {
    var file="./data/admin/profileUpload/"+profile.toLowerCase()+'.csv';
    return await fileExtension.readCSVasJson(file);
};

step("Verify new patient creation",async function() {
    const obj =(await getCSVobj('patient'))[0];
    assert.ok(obj['Registration Number']==await $('#patientIdentifierValue').text());
    assert.ok(obj['First Name']==await textBox({id: 'givenName'}).value());
    assert.ok(obj['Middle Name']==await textBox({id: 'middleName'}).value());
    assert.ok(obj['Last Name']==await textBox({id: 'familyName'}).value());

    assert.ok(users.getGender(obj['Gender'])==users.getGender(await dropDown({id: 'gender'}).value()));
    assert.ok(obj['Address']['Village']==await textBox(toRightOf("Village")).value());
    assert.ok(obj['Address']['Tehsil']==await textBox(toRightOf("Tehsil")).value());
    assert.ok(obj['Address']['District']==await textBox(toRightOf("District")).value());
    assert.ok(obj['Address']['State']==await textBox(toRightOf("State")).value());
    });

step("verify <profile> visit", async function (profile) {
    const obj= (await getCSVobj(profile))[0];
    assert.ok(obj.visitType==await $('#visitType').text());
    await click(link({class:'visit'}));
    var regId= obj['Registration Number'];
    if (await $("//div/child::span[contains(text(),'"+regId+"')]").exists()){
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['Hospital Course'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['Chief Complaint Duration'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['Examination Notes'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['History Notes'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['Chief Complaint Notes'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['Smoking History'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Obs']['Consultation Note'])).exists());
        assert.ok(await (await text(obj['Repeat']['1']['Diagnosis']['1'])).exists());
     }
});
