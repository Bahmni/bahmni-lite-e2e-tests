"use strict"
const { fileField, click,attach,button, $} = require('taiko');
const path = require('path');
const taikoHelper = require("../util/taikoHelper")

step("Add a report <labReport> to <module>", async function (labReport, module) {
	await attach(path.join("./data", `${labReport}.jpg`), fileField({'name':'image-document-upload'}),{waitForEvents:['DOMContentLoaded']});
	await taikoHelper.repeatUntilNotFound($("#overlay"))
	await taikoHelper.repeatUntilEnabled(button('SAVE'))
	await click(button('SAVE'),{waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
	await taikoHelper.repeatUntilNotFound($("#overlay"))
});