const {
    click,
    below,
    write,
    into,
    textBox,
    toRightOf,
} = require('taiko');
var users = require("../util/users");

step("Manage Users", async function() {
	await click("Manage Users");
});

step("Add hospital user <hospitalUser>", async function (hospitalUser) {
    await click("Add User");
    await click("Next",below("Create a new person"));
    gauge.dataStore.scenarioStore.put("hospitalUser",hospitalUser)
});

step("Enter hospital user's personal details", async function() {
    var hospitalUser = JSON.parse(gauge.dataStore.scenarioStore.get("hospitalUser",hospitalUser))
    await write(hospitalUser.name,into(textBox(toRightOf("Given"))));
    await write(hospitalUser.family,into(textBox(toRightOf("Family"))));
    await click(hospitalUser.gender);
});

step("Enter hospital user's details", async function() {
    var hospitalUser = JSON.parse(gauge.dataStore.scenarioStore.get("hospitalUser",hospitalUser))

    await write(users.getUserNameFromEncoding(hospitalUser.userDetails), into(textBox(toRightOf("Username"))));
    await write(users.getPasswordFromEncoding(hospitalUser.userDetails), into(textBox(toRightOf("User's Password"))));
    await write(users.getPasswordFromEncoding(hospitalUser.userDetails), into(textBox(toRightOf("Confirm Password"))));
});

step("Save hospital user", async function() {
    await click("Save User");
});