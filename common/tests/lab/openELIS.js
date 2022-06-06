"use strict"
const { goto, toRightOf, textBox,text, into, write, click, $,below, checkBox,waitFor,image,within,link } = require('taiko');
var fileExtension = require('../util/fileExtension')
const taikoHelper = require("../util/taikoHelper")
step("Enter password in ELIS", async function() {
    await write("adminADMIN!",into(textBox(toRightOf("Enter Password:"))));
});

step("goto ELIS home", async function() {
        await goto(process.env.bahmniHost + process.env.openelisHome);
});

step("enter user name in ELIS", async function() {
        await write("admin",into(textBox(toRightOf("Enter Username:"))));
});

step("click Submit", async function() {
        await click("Submit");	
});

step("Find the patient", async function () {
        var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
        await write(patientIdentifierValue,into(textBox(below("Patient Id"))));
});

step("Click collect sample", async function () {
        await click("Collect Sample");
});

step("Generate the auto id", async function() {
        await waitFor(2000)
        await click("Generate");
});

step("Save in openELIS", async function () {
        await click("Save");
});

step("Enter lab result <details> in the result", async function (details) {
        var content = fileExtension.parseContent(`./data/elis/samplesCollected/${details}.json`)
        var data = null;
        data = JSON.parse(content)
        for(var resultIndx=0;resultIndx<data.results.length;resultIndx++){
                await write(data.results[resultIndx].value,
                        into(textBox(toRightOf(data.results[resultIndx].name)))) 
        }        
});

step("Click today's sample in samples collected", async function () {
        await click("Today",below("Samples Collected"));
});

step("Click collect sample for <patientIdentifier>", async function(patientIdentifier) {
        await click("Backlog",below("Samples to Collect"));
        await write(patientIdentifier,into(textBox(below("Patient ID"))));
        await click("Collect Sample");
});

step("Validate lab result <details>", async function (details) {
        var patientIdentifier = gauge.dataStore.scenarioStore.get("patientIdentifier")
        await click(image({title:'Validate'}),toRightOf(patientIdentifier))
        var content = fileExtension.parseContent(`./data/elis/samplesCollected/${details}.json`)
        var data = null;
        data = JSON.parse(content)
        for(var resultIndx=0;resultIndx<data.results.length;resultIndx++){
                await click(checkBox(within($(`#row_${resultIndx}`),below("Accept"))));
        }
});

step("Put identifier <patientIdentifier>", async function(patientIdentifier) {
        gauge.dataStore.scenarioStore.put("patientIdentifier",patientIdentifier);
});

step("Click backlog of sample collection", async function() {
        await click("Backlog",below("Samples to Collect"));
});

step("Open the result of the patient", async function() {
        var patientIdentifier = gauge.dataStore.scenarioStore.get("patientIdentifier")
        await click(image({title:'Result'},toRightOf(patientIdentifier)))
        await taikoHelper.repeatUntilFound(text("Results"))
});

step("Click lab dashboard", async function() {
        await click(link("Lab Dashboard"))
});

step("click Send Anyway", async function() {
        try{
                await click("Send Anyway")
        }catch(e){}
});

step("Goto OpenELIS", async function() {
        await goto(process.env.bahmniHost + process.env.openelisHome, { waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
});
