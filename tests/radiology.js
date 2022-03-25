const { write, toRightOf,into,textBox, press, goto, below, scrollTo,click } = require("taiko");

var users = require("util/users");

step("Enter Radiology username", async function() {
    await write(users.getUserNameFromEncoding(process.env.pacsUser),into(textBox(toRightOf("Username"))));
});

step("Enter Radiology password", async function() {
    await write(users.getPasswordFromEncoding(process.env.pacsUser),into(textBox(toRightOf("Password"))));
});

step("Click Signin", async function() {
	await click("Sign in",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
});

step("Enter patient id in radiology app", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await write(patientIdentifierValue,into(textBox(below("ID"))))
    await press("Enter")
});

step("Goto DCM4chee", async function() {
    var URLDCM = process.env.bahmniHost+process.env.dcm4chee
    console.log(URLDCM)
	await goto(URLDCM)
});

step("Create a radiology order", async function() {
	await scrollTo("Radiology");
    await click("Radiology");
});

step("choose test <test>", async function(test) {
    await click(test);
});

step("Find the patient on DCM4chee", async function() {
	var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
	await write(patientIdentifierValue,into(textBox(below("ID"))))
});

step("Search on DCM4chee", async function () {
	await press("Enter")
});

step("click on the patient details", async function() {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
	await click(firstName)
});