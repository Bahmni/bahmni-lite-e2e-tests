const {
    goto,
    $,
    click,
    below,
    highlight,
    text,
    waitFor,
} = require('taiko');
var taikoHelper = require("util/taikoHelper");

step("Goto Clinical application", async function () {
    await goto(process.env.bahmniHome,{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Goto Bahmni main home", async function() {
    await goto(process.env.bahmniHost,{waitForNavigation:true,waitForEvents:['networkIdle'],navigationTimeout:process.env.actionTimeout});
});

step("Open <appName> app", async function (appName) {
    await highlight(appName)
    do{
        await click(appName.toUpperCase(),{waitForNavigation:true,waitForEvents:['networkIdle'],navigationTimeout:process.env.actionTimeout});
        await taikoHelper.repeatUntilNotFound($("#overlay"))    
        await waitFor(1000)
    }while(await !text(appName).exists())
});