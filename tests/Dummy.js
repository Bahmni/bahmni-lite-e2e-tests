const gaugeHelper = require("../bahmni-e2e-common-flows/tests/util/gaugeHelper")

step("Pre test step", async function() {
	gaugeHelper.save("patientIdentifier",'ET203200')
	gaugeHelper.save("patientFirstName","Sudeva")
    gaugeHelper.save("patientLastName","Abbott")
});