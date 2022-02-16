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

step("Select patient", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await write(patientIdentifierValue);
    await click(`(${patientIdentifierValue})`);
});

step("Click patient id", async function() {
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier");
    await click(patientIdentifierValue);
    await waitFor(1000)
});


step("Select service <service>", async function(service) {
    await dropDown(toRightOf("Service")).select(service);
});

step("Search and select service <service>", async function(service) {
    await click("Service");
    await click(service);
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

step("Open calender at time <appointmentTime>", async function(appointmentTime) {
    await click($(".fc-widget-content"),toRightOf(`${appointmentTime}`));
    await waitFor(async () => !(await $("overlay").exists()))
    gauge.dataStore.scenarioStore.put("appointmentStartDate",date.getDateFrommmddyyyy(await textBox({placeHolder:"mm/dd/yyyy"}).value()))
});

step("Compute end time", async function() {
    await waitFor(2000)
});

step("Click Save", async function() {
    await click("Save")
});

step("Check and Save", async function() {
    await click("Check and Save");
});

step("Click Cancel", async function() {
    //await confirm('Are you sure, you want to mark appointment as Cancelled?', async () => await accept())
    await waitFor(1000)
    await click('Cancel')
    await waitFor(1000)
    await click($('#yes'))
});

step("Goto tomorrow's date", async function() {
	await click(button({type:'button'}, within($('[ng-click="goToNext()"]'))));
});

step("Goto appointments's date", async function() {
    var appointmentStartDate = gauge.dataStore.scenarioStore.get("appointmentStartDate")
    console.log(date.ddmmyyyyWithSlash(appointmentStartDate))
    write(date.ddmmyyyyWithSlash(appointmentStartDate),into(timeField(toRightOf("Week"))))
});

step("Goto Next week", async function() {
	await click("Week");
    var month = date.getShortNameOfMonth(new Date())
    await click(button(),toRightOf(month));
});

step("Goto day view of the calendar", async function() {
	await click("Day");
    var month = date.getShortNameOfMonth(new Date())
    await click(button(),toRightOf(month));
});


step("Click Close", async function() {
//    await click(button({"data-testid":"save-close-button"}),{waitForNavigation:true})
	await click(button("Close",{waitForNavigation:true}))
});

step("Goto List view", async function() {
    await click("List view");
});