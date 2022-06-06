const {
    goto,
    $,
    click,
    below,
    highlight,
    text,
    waitFor,
    link,
    button,
    toRightOf,
    within,
} = require('taiko');
var taikoHelper = require("./util/taikoHelper");
var users = require("./util/users")
const csvConfig=require("./util/csvConfig");


step("put first name <firstName> middle name <middleName> lastname <lastName>", async function(firstName, middleName, lastName) {
	gauge.dataStore.scenarioStore.put("patientFirstName",firstName);
    gauge.dataStore.scenarioStore.put("patientMiddleName",middleName);
    gauge.dataStore.scenarioStore.put("patientLastName",lastName);
});

step("put randomly generated names for patient", async function() {
    var firstName = users.randomName(8)
    gauge.message(`firstName ${firstName}`)
    gauge.dataStore.scenarioStore.put("patientFirstName",firstName)

    var middleName = users.randomName(8)
    gauge.message(`middleName ${middleName}`)
    gauge.dataStore.scenarioStore.put("patientMiddleName",middleName);

    var lastName = users.randomName(8)
    gauge.message(`firstName ${lastName}`)
    gauge.dataStore.scenarioStore.put("patientLastName",lastName);
});

step("Goto Clinical application", async function () {
    await goto(process.env.bahmniHome,{waitForNavigation:true,navigationTimeout:process.env.loginTimeout});
    if(await text("Advanced").exists())
    {
        await click("Advanced")
        await click("Proceed to")
    }
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Goto Bahmni main home", async function() {
    await goto(process.env.bahmniHost,{waitForNavigation:true,waitForEvents:['networkIdle'],navigationTimeout:process.env.actionTimeout});
});

step("Open <appName> app", async function (appName) {
    await highlight(appName)
    await click(appName.toUpperCase(),{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
});

step("Check if <appName> app is opened", async function (appName) {
    if(!await text(appName).exists())
        return
    gauge.message("App name exists")
    await highlight(appName)
    await click(appName.toUpperCase(),{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
    await taikoHelper.repeatUntilNotFound($("#overlay"))    
});

step("wait for overlay to disappear", async function() {
    await taikoHelper.repeatUntilNotFound($("#overlay"))
    //await waitFor(async () => !(await $("#overlay").exists()))
});

step("wait for overlay and Saved to disappear", async function() {
	await taikoHelper.repeatUntilNotFound($("#overlay"))
    await waitFor(async () => !(await text("Saved",within('.message-text')).exists()));
});

step("Log out of openmrs", async function() {
	await click(link("Log out"))
});

step("Wait for message <message> to disappear", async function(message) {
    await taikoHelper.repeatUntilNotFound(text(message))
});

step("put doctor first name <doctorFirstName> middle name <doctorMiddleName> lastname <doctorLastName>", async function(doctorFirstName, doctorMiddleName, doctorLastName) {
    gauge.dataStore.scenarioStore.put("doctorFirstName",doctorFirstName);
    gauge.dataStore.scenarioStore.put("doctorMiddleName",doctorMiddleName);
    gauge.dataStore.scenarioStore.put("doctorLastName",doctorLastName);
});

step("Choose a random uploaded patient identifier", async function() {
    //var recordLength=gauge.dataStore.scenarioStore.get("fileDataLength")-1;
    let recordSeq=0;
    const recordAsJson =(await csvConfig.getCSVasJson("patient"))[recordSeq];

    // await taikoHelper.selectEntriesTillIterationEnds(recordSeq);
    var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier"+(recordSeq));
    gauge.dataStore.scenarioStore.put("patientIdentifier",patientIdentifierValue);
});