const endpoints = require('../constants/apiConstants').endpoints;
const expectedValues = require('../constants/apiConstants').expectedValues;
const httpRequests = require('../util/httpRequest')
const assert = require("assert");
const PatientProfile = require('../payloads/patientProfile');
const helper = require('../util/helper');
const BahmniEncounter = require('../payloads/bahmniEncounter');

step("Verify the active patient is retuned with status code 200", async function () {
	var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");
	const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
	var responseStartVisit = await helper.startVisit(payload);

	//Vakidate active patient queue
	var responseActivePatient = await helper.getActivePatients();
	assert.equal(responseActivePatient.statusCode, 200)
	assert.equal(responseActivePatient.body.filter(patients => patients.identifier == response.body.patient.identifiers[0].identifier).length, 1);
	
	//end visit
	await helper.endVisit(responseStartVisit.body.uuid);

	var responseActivePatientAfterEnd = await helper.getActivePatients();
	assert.equal(responseActivePatientAfterEnd.statusCode, 200)
	assert.equal(responseActivePatientAfterEnd.body.filter(patients => patients.identifier == response.body.patient.identifiers[0].identifier).length, 0);
});

step("Verify user is able to save the consultation encounter for a patient with status code 200", async function() {
	var payload = await new BahmniEncounter().initialize();
	var response = await httpRequests.customPost(endpoints.BAHMNI_ENCOUNTER, JSON.stringify(payload));
	assert.equal(response.statusCode,200)

	await helper.endVisit(response.body.visitUuid);
});