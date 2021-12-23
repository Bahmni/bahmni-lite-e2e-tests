const { goto, below, write, textBox, into, click, toLeftOf, checkBox } = require('taiko');

step("goto odoo link", async function() {
    await goto(process.env.odooHost);
});

step("enter odoo username", async function() {
    await write(process.env.odooUsername,below("Email"));
});

step("enter odoo password", async function() {
    await write(process.env.odooPassword,into(textBox(below("Password"))));
});

step("Log in to odoo", async function() {
    await click("Log in");
});

step("Click Sales", async function() {
    await click("Sales");
});

step("View Quotations below direct sales", async function() {
    await click("Quotations",below("Direct Sales"));
});

step("Click customer name", async function() {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    var middleName = gauge.dataStore.scenarioStore.get("patientMiddleName")
    var lastName = gauge.dataStore.scenarioStore.get("patientLastName")

    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
    await click(firstName+" "+middleName+" "+lastName);
});

step("Confirm sale", async function() {
    await click("Confirm Sale");
});