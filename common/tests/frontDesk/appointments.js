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
const taikoHelper = require("../util/taikoHelper")

step("View all appointments", async function () {
    await click(process.env.appointmentList);
});

step("Begin capturing appointment details", async function() {
    await click("Add new appointment");
});

step("Select Patient id", async function () {
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

step("Select service <service>", async function(service) {
    await dropDown(toRightOf("Service")).select(service);
});

step("Search and select service", async function() {
    await click("Service");
    await click(process.env.service);
});

step("Search and select appointment location", async function() {
    await click("Location");
    await click(process.env.appointmentLocation);
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

step("put <appointmentDate> as appointment date", async function(appointmentDate) {
    gauge.dataStore.scenarioStore.put("appointmentStartDate",date.getDateFrommmddyyyy(appointmentDate))
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

step("Goto tomorrow's date", async function() {
	await click(button({type:'button'}, within($('[ng-click="goToNext()"]'))));
});

step("Goto appointments's date", async function() {
    var appointmentStartDate = gauge.dataStore.scenarioStore.get("appointmentStartDate")
    await timeField(toRightOf("Week")).select(new Date(appointmentStartDate));
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
//    await click(button({"data-testid":"save-close-button"}),{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
	await click(button("Close",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout}))
});

step("Goto List view", async function() {
    await click("List view");
});

step("select the walk in appointment option", async function () {
	await click(checkBox(toLeftOf("Walk-in Appointment")))
});

step("select the teleconsultation appointment option", async function () {
	await click(checkBox(toLeftOf("Teleconsultation")))
});

step("select the recurring appointment option", async function () {
	await click("Recurring Appointment");
});

step("select the Start date as today", async function () {
	await click("Today",below("Starts"));
    gauge.dataStore.scenarioStore.put("appointmentStartDate",new Date())
});

step("select the End date as after few occurances", async function () {
    await click("After",below("Ends"));
});

step("select Repeats every <numberOfDays> days", async function (numberOfDays) {
    await write(numberOfDays,into(textBox(below("Repeats"))));
});

step("Click Cancel all", async function() {
    await scrollTo("Cancel All")
    await click("Cancel All")
});

step("Click Cancel", async function() {
    await scrollTo('Cancel')
    await click('Cancel')
});

step("Cancel appointment", async function () {
    await scrollTo($('#yes'))
    await click($('#yes'))
});

step("Open admin tab of Appointments", async function() {
	await click("Admin")
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Create a service if it does not exist", async function() {
    if(await text(process.env.service).exists())
        return
    await click("Add New Service")
    await write(process.env.service,into(textBox({placeHolder:"Enter a service name"})))
    await write("For test automation",into(textBox({placeHolder:"Enter description"})))
    await click("Save",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout})
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Manage locations", async function() {
	await click("Manage Locations")    
});

step("Goto Today", async function() {
	await click("Today")
});