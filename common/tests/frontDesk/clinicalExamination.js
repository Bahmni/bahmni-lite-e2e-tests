"use strict";
const {
    click,
    waitFor,
    timeField,
    toRightOf,
    textBox,
    into,
    write,
    dropDown,
    highlight,
    below,
    within,
    scrollTo,
    $,
    text,
    confirm,
    accept,
    button
} = require('taiko');
var fileExtension = require("../util/fileExtension");
const taikoHelper = require("../util/taikoHelper")
var date = require("../util/date")

step("Doctor prescribe tests <prescriptions>", async function (prescriptionFile) {
    var prescriptionFile = `./data/${prescriptionFile}.json`;
    var testPrescription = JSON.parse(fileExtension.parseContent(prescriptionFile))
    gauge.message(testPrescription)
    gauge.dataStore.scenarioStore.put("LabTest", testPrescription.test)
    await taikoHelper.repeatUntilFound(text(testPrescription.test))
    await click(testPrescription.test, { force: true })
    await waitFor(100)
});


step("put medications <prescriptionNames>", async function (prescriptionNames) {
    var prescriptionFile = `./data/${prescriptionNames}.json`;
    gauge.dataStore.scenarioStore.put("prescriptions", prescriptionFile)
})

step("Doctor prescribes medicines <prescriptionNames>", async function (prescriptionNames) {
    var prescriptionFile = `./data/${prescriptionNames}.json`;
    gauge.dataStore.scenarioStore.put("prescriptions", prescriptionFile)
    var drugName = gauge.dataStore.scenarioStore.get("Drug Name")

    var medicalPrescriptions = JSON.parse(fileExtension.parseContent(prescriptionFile))
    gauge.message(medicalPrescriptions)

    if (medicalPrescriptions.drug_name != null) {
        if (drugName == null)
            drugName = medicalPrescriptions.drug_name;
        if(await textBox(toRightOf("Drug Name")).exists()){
            await write(drugName, into(textBox(toRightOf("Drug Name"))));
            await dropDown(toRightOf("Units")).select(medicalPrescriptions.units);
            await dropDown(toRightOf("Frequency")).select(medicalPrescriptions.frequency)
            try{
                await click("Accept");
            }
            catch(e){
                await click(text(drugName, below("Drug Name"), toRightOf("Drug Name")));
                await click("Accept");
            }
            await write(medicalPrescriptions.dose, into(textBox(toRightOf("Dose"))));
            await write(medicalPrescriptions.duration, into(textBox(toRightOf("Duration"))));    
        }
        else{
            await write(drugName, into(textBox(below("Drug Name"))));
            await dropDown(below("Units")).select(medicalPrescriptions.units);
            await dropDown(below("Frequency")).select(medicalPrescriptions.frequency)
            await click("Accept");
            await write(medicalPrescriptions.dose, into(textBox(below("Dose"))));
            await write(medicalPrescriptions.duration, into(textBox(below("Duration"))));
        }
        await click("Add");
    }
});

step("Doctor captures consultation notes <notes>", async function (notes) {
    await click("Consultation", { force: true, waitForNavigation: true, waitForStart: 2000 });
    await waitFor(textBox({ placeholder: "Enter Notes here" }))
    await write(notes, into(textBox({ "placeholder": "Enter Notes here" })), { force: true })
});

step("Doctor clicks consultation", async function () {
    await click("Consultation", { force: true, waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
});

step("Choose Disposition", async function () {
    await click("Disposition", { waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
});

step("Doctor advises admitting the patient", async function () {
    await waitFor(async () => (await dropDown("Disposition Type").exists()))
    await dropDown("Disposition Type").select('Admit Patient')
    await write("Admission Notes", into(textBox(below("Disposition Notes"))))
});

step("Doctor advises discharging the patient", async function () {
    await waitFor(async () => (await dropDown("Disposition Type").exists()))
    await dropDown("Disposition Type").select('Discharge Patient')
    await write("Discharge Notes", into(textBox(below("Disposition Notes"))))
});

step("Open <tabName> Tab", async function (tabName) {
    await click(tabName, { waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Save visit data", async function () {
    await click("Save", { waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
});

step("Join teleconsultation", async function () {
    await scrollTo('Join Teleconsultation')
    await click('Join Teleconsultation');
    await taikoHelper.repeatUntilNotFound($("#overlay"))
    await scrollTo(button('Join teleconsultation'), toRightOf("Scheduled"))
    await click(button('Join teleconsultation', toRightOf("Scheduled")))
    await highlight('Tele Consultation')
    await click(($('[ng-click="closeTeleConsultation()"]')));
});

step("Doctor notes the diagnosis", async function () {
    await click("Diagnosis");
    await write("Cardiac arrest", into(textBox(below("Diagnosis"))));
    await click("Accept", toRightOf("Cardiac arrest"))
    await click("Primary", below("Order"));
    await click("Confirmed", below("Certainty"));
    await write("Diabetes II, uncomplicated", into(textBox(below("Condition"))));
    await click("Accept", toRightOf("Diabetes II, uncomplicated"));
    await click("Active");
});