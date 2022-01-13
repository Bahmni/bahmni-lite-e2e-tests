const { write, toRightOf,into,textBox, press } = require("taiko");

var users = require("util/users");

step("Enter Radiology username", async function() {
    await write(users.getUserNameFromEncoding(process.env.odooUser),into(textBox(toRightOf("Username"))))
});

step("Enter Radiology password", async function() {
    await write(users.getPasswordFromEncoding(process.env.odooUser),into(textBox(toRightOf("Password"))))
});

step("Click Signin", async function() {
	await click("Sign in")
});

step("Enter patient id in radiology app", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await write(patientIdentifierValue,into(textBox(below("ID"))))
    await press("Enter")
});