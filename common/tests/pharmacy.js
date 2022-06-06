const { click, below } = require("taiko");

step("Mark the drug as dispensible", async function() {
    var drugName = gauge.dataStore.scenarioStore.get("Drug Name")
    await click(drugName,below("Recent"))
	await click(".dispense-btn");
});