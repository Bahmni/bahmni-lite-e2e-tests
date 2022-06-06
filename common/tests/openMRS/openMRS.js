const {
    goto,
    click,
    toRightOf,
    write,
    into,
    textBox,
    press,
    text,
} = require('taiko');
const taikoHelper = require("../util/taikoHelper")
var users = require("../util/users");

step("Login as <user>", async function (user) {
    await write(users.getUserNameFromEncoding(process.env[user]), into(textBox(toRightOf("Username"))));
    await write(users.getPasswordFromEncoding(process.env[user]), into(textBox(toRightOf("Password"))));
    await press("Enter", { waitForNavigation: true, navigationTimeout: process.env.actionTimeout })
})

step("Goto Administration", async function () {
    await click("Administration")
});

step("Goto openMRS", async function () {
    await goto(process.env.bahmniHost + "openmrs", { waitForNavigation: true, navigationTimeout: process.env.loginTimeout });
});

step("Log out of openMRS if still logged in", async function () {
    if (await text("Log out").exists()) {
        await click("Log out");
    };
});