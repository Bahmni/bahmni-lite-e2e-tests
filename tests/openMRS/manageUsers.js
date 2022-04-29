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

step("Manage Roles", async function() {
	await click("Manage Roles");
});


step("Add Role <roleDetailsFile>", async function(roleDetailsFile) {
	await click("Add Role");
    var roleDetails = JSON.parse(roleDetailsFile)
    gauge.dataStore.scenarioStore.put("roleDetails",roleDetails)
    await write(roleDetails.name,into(textBox(toRightOf("Role"))))
    for(var resultIndx=0;resultIndx<roleDetails.inheritedRoles.length;resultIndx++){
        await click(roleDetails.inheritedRoles[resultIndx])
    }
});

step("Save role", async function(roleDetails) {
    await scrollTo("Save role")
	await click("Save role",{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
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