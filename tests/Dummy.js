const gaugeHelper = require("../bahmni-e2e-common-flows/tests/util/gaugeHelper")

step("Pre test step", async function() {
	gaugeHelper.save("patientIdentifier",'ET203097')
	gaugeHelper.save("patientFirstName","Arya")
    gaugeHelper.save("patientLastName","Pilla")
});