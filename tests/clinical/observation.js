"use strict";
const {
    click,
    waitFor,
    focus,
    toRightOf, 
    textBox, 
    text,
    into, 
	write, 
	$,
	dropDown,
    fileField,
    attach,
    scrollTo,
} = require('taiko');
const taikoHelper = require("../util/taikoHelper")
const fileExtension = require("../util/fileExtension")
const path = require('path');
var assert = require("assert");

step("Enter Pulse(/min)", async function() {
	await write("70",into(textBox(toRightOf("Pulse"))));
});

step("Enter Temperature (F)", async function() {
	await write("99",into(textBox(toRightOf("Temperature"))));
});

step("Enter RR (/min)", async function() {
	await write("99",into(textBox(toRightOf("RR"))));
});

step("Enter SPO2 (%)", async function() {
	await write("99",into(textBox(toRightOf("SPO2"))));
});

step("Enter systolic, diastolic", async function () {
	await write("110",into(textBox(toRightOf("Systolic"))));
	await write("110",into(textBox(toRightOf("Diastolic"))));
});

step("Enter posture", async function () {
	await click("Sitting",toRightOf("Posture"));
});

step("Click Vitals", async function() {
	await waitFor('Vitals')
	await click("Vitals",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout})
	await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Enter History and examination details", async function() {
    var historyAndExaminationDetails = JSON.parse(fileExtension.parseContent("./data/program/historyAndExaminationDetails.json"))

    for(var chiefComplaint of historyAndExaminationDetails.Chief_Complaints){
        // await taikoHelper.repeatUntilFound(textBox(toRightOf("Chief Complaint")))
        // await focus(textBox(toRightOf("Chief Complaint")))
        await scrollTo("Chief Complaint")
        await write(chiefComplaint.Chief_Complaint,into(textBox(toRightOf("Chief Complaint"))));
        await scrollTo("Chief Complaint")
        await click('Accept',{force:true});
        await write(chiefComplaint.for, into(textBox(toRightOf("for"))));    
        await dropDown(toRightOf("for")).select(chiefComplaint.for_frequency);
    }
    await write(historyAndExaminationDetails.Chief_complaint_notes,into(textBox("Chief Complaint Notes")));
    await write(historyAndExaminationDetails.History_Notes,into(textBox("History Notes")));
    await write(historyAndExaminationDetails.Examination_notes,into(textBox("Examination Notes")));
    await click(historyAndExaminationDetails.Smoking_History,toRightOf("Smoking History"));

    await attach(path.join("./data/program/",'programReport1.jpg'),fileField({id:"file-browse-observation_9"}));
});

step("Click patient name", async function() {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    await scrollTo(`${firstName}`)
    await click(`${firstName}`)
});

step("Should not find the patient's name", async function() {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    assert.ok(!await text(`${firstName}`).exists())
});

