const {
    $,
    dropDown,
    button,
    within,
    highlight,
    timeField,
    toRightOf,
    write,
    goto,
    above,
    click,
    checkBox,
    toLeftOf,
    text,
    into,
    textBox,
    waitFor,
    confirm,
    accept,
    scrollDown,
    link,
    below,
    press,
    scrollTo
} = require('taiko');
var date = require("../util/date");

step("Open Appointments List", async function() {
    await click("Appointments List");
});

step("Begin capturing appointment details", async function() {
    await click("Add new appointment");
});

step("Enter Patient id", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await write(patientIdentifierValue,into(textBox({placeHolder:"Patient Name or ID"})));
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    await click(firstName);
});

step("Click patient id", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await click(patientIdentifierValue);
    await waitFor(1000)
});


step("Select service <service>", async function(service) {
    await dropDown(toRightOf("Service")).select(service);
});

step("Select appointment date", async function() {
    await timeField({type:"date"},toRightOf("Date")).select(date.tomorrow());
});

step("Select location <location>", async function(location) {
    await dropDown("Location").select(location)
});

step("Enter appointment time <appointmentTime> into Start time", async function(appointmentTime) {
    await write(appointmentTime,into(textBox(toRightOf("Start Time"))));
    await click(`${appointmentTime} am`)
});

step("Compute end time", async function() {
    await waitFor(2000)
});

step("Click Save", async function() {
    await click("Save")
});

step("Click Cancel", async function() {
    //await confirm('Are you sure, you want to mark appointment as Cancelled?', async () => await accept())
    await click('Cancel')
    await waitFor(1000)
    await click('Yes')
});

step("Goto tomorrow's date", async function() {
	await click(button({type:'button'}, within($('[ng-click="goToNext()"]'))));
});