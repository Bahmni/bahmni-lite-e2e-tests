const { write, into, textBox, toLeftOf } = require("taiko");
var assert = require("assert");

step("Enter patient name in patient search screen", async function() {
	var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
	var middleName = gauge.dataStore.scenarioStore.get("patientMiddleName")
	var lastName = gauge.dataStore.scenarioStore.get("patientLastName")
	await write(`${firstName} ${middleName} ${lastName}`,into(textBox(toLeftOf("Clear"))))
});

step("Select the patient on patient serach screen", async function () {
	await click(`${firstName} ${middleName} ${lastName}`,toLeftOf("Actions"))
});

step("Validate the lab tests <labTests> are available", async function (labTests) {
	var prescriptionFile = `./data/${labTests}.json`;
    var testDetail = JSON.parse(fileExtension.parseContent(prescriptionFile))

	assert.ok(await text(testDetail.test).exists())
});