const {
    $,
    click,
    button,
    toRightOf,
    focus,
    dropDown,
    write,
    textBox,
    into,
    timeField,
    waitFor,
    attach,
    fileField,
    below,
    link,
    text,
    within,
    scrollTo
} = require('taiko');
var date = require("../util/date");
var fileExtension = require("../util/fileExtension");
var path = require("path")
var taikoHelper = require("../util/taikoHelper")

step("Click Start Special OPD Visit", async function() {
    await scrollTo("Start OPD Visit")
    await click(button(toRightOf('Start OPD Visit'), within($(".submit-btn-container"))));
    await click('Start Special OPD Visit',{waitForNavigation:true})
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Enroll in program <program> stage <programStage> starting <numberOfYearsAgo_startDate> years ago with treatment start <numberOfYearsAgo_treatmentDate> years ago, id <id>, dr incharge <doctor> and treatment stage <stage>", 
async function (program, programStage, numberOfYearsAgo_startDate, numberOfYearsAgo_treatmentDate, id, doctor, stage) {
    await waitFor("New Program Enrollment",below("Date of birth"))
    await click('New Program Enrollment',below("Date of birth"))
    await waitFor("Program :")
    await dropDown(toRightOf('Program')).select(program)
    
    var startDate = date.getDateYearsAgo(numberOfYearsAgo_startDate);
    await timeField({type:"date"},toRightOf("Start Date")).select(startDate);

    var treatmentDate = date.getDateYearsAgo(numberOfYearsAgo_treatmentDate);
    await timeField({type:"date"},toRightOf("Treatment Date")).select(treatmentDate);

    await write(id, into(textBox(toRightOf('ID Number'))))
    // await dropDown(toRightOf('Program Stage')).select(programStage)
    await write(doctor, into(textBox(toRightOf('Doctor-In-Charge'))))
    await dropDown(toRightOf('Patient Stage')).select(stage)
    await click(button('Enroll'),{waitForNavigation:true,navigationTimeout:process.env.actionTimeout})
    await taikoHelper.repeatUntilNotFound($("#overlay"))
    await waitFor(async () => !(await text("Saved",within('.message-text')).exists()));
});

step("Open the program dashboard <program>", async function(program) {
    await waitFor(text(`${program} Dashboard`,within($('#dashboard-link'))))
    await click(text(`${program} Dashboard`,within($('#dashboard-link'))),{waitForNavigation:true,navigationTimeout:480000});
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Goto All sections", async function () {
    await taikoHelper.repeatUntilFound(link("All"))
    await click(link("All"),{force:true,waitForNavigation:true,navigationTimeout:process.env.actionTimeout})    
});

step("Search the newly created patient with HealthID", async function () {
    var healthID = gauge.dataStore.scenarioStore.get("healthID")
    await write(healthID, into(textBox({ "placeholder": "Search Name/Patient Identifier  ..." })))
    await click('Search',{waitForNavigation:true})
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});
