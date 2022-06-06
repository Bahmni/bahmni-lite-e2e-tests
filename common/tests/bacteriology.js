const { click, waitFor, text, timeField,toRightOf,scrollTo } = require("taiko");
var date = require("./util/date");
var fileExtension = require("./util/fileExtension");
var taikoHelper = require("./util/taikoHelper");

step("Choose Bacteriology", async function() {
	await click("Bacteriology")
    await waitFor(async () => (await text("consultation note").exists()))
});

step("Enter Date of Sample Collection", async function() {
    var startDate = date.yesterday();
    await timeField({type:"date"},toRightOf("Date of Sample Collection")).select(startDate);
});

step("Enter type of sample <sampleType>", async function(sampleType) {
	await click(sampleType)
});

step("Enter Bacteriology results", async function() {
    var observationFormValues = JSON.parse(fileExtension.parseContent(`./data/opConsultation/Bacteriology.json`))

    await taikoHelper.executeConfigurations(observationFormValues.ObservationFormDetails,observationFormValues.ObservationFormName,true)
});

step("verify bacteriology details", async function() {
    var observationFormValues = JSON.parse(fileExtension.parseContent(`./data/opConsultation/Bacteriology.json`))
    await scrollTo("Bacteriology Results");
    await click(observationFormValues.SampleType)
    await taikoHelper.verifyConfigurations(observationFormValues.ObservationFormDetails,observationFormValues.ObservationFormName)
});