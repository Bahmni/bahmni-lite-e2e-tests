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
    if(await text("Advanced").exists())
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
    await waitFor(async () => !(await $("overlay").exists()))
});