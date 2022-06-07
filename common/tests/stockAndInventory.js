const { goto, below, write, textBox, into, click, toLeftOf, checkBox, reload } = require('taiko');

step("enter odoo username", async function() {
    if(await textBox(below("Password")).exists())
    {
        await write(process.env.odooUsername,into(textBox(below("Email"))));
    }
});

step("enter odoo password", async function() {
    if(await textBox(below("Password")).exists())
    {
        await write(process.env.odooPassword,into(textBox(below("Password"))));
    }
});

step("Log in to odoo", async function () {
    await click("Log in",
        { waitForNavigation: true, navigationTimeout: process.env.actionTimeout }
    );
});

step("Click Sales", async function() {
    await click("Sales");
});

step("View Quotations below direct sales", async function() {
    await click("Quotations",below("Direct Sales"));
});

step("Click customer name", async function() {
	var patientIdentifierValue= gauge.dataStore.scenarioStore.get("patientIdentifier");
    console.log(patientIdentifierValue)
    await click(patientIdentifierValue);
});

step("Confirm sale", async function() {
    await click("Confirm Sale");
});

step("Goto Odoo", async function() {
    await reload()
    await goto(process.env.odooURL, { waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
});

step("Click Quotations", async function() {
	await click("Quotations")
});