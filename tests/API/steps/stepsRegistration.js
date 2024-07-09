const endpoints = require('../constants/apiConstants').endpoints;
const expectedValues = require('../constants/apiConstants').expectedValues;
const httpRequests = require('../util/httpRequest')
const assert = require("assert");
const PatientProfile = require('../payloads/patientProfile');
const helper = require('../util/helper');

step("Verify the user is able to create a new patient and returns status code as 200", async function () {
    var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    assert.equal(response.statusCode, 200)
    assert.equal(response.body.patient.person.names[0].givenName, payload.patient.person.names[0].givenName)
    assert.equal(response.body.patient.person.names[0].middleName, payload.patient.person.names[0].middleName)
    assert.equal(response.body.patient.person.names[0].familyName, payload.patient.person.names[0].familyName)
    gauge.message("Patient ID - " + response.body.patient.identifiers[0].identifier)
    gauge.message("Response - " + JSON.stringify(response.body))
});

step("Verify the user is able to update the existing patient and returns status code as 200", async function () {
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    var patientUUID = response.body.patient.uuid
    var payloadUpdate = await new PatientProfile().initialize();
    const responseUpdate = await httpRequests.customPost(endpoints.PATIENT_PROFILE + `/${patientUUID}`, JSON.stringify(payloadUpdate))
    assert.equal(responseUpdate.statusCode, 200)
    assert.equal(response.body.patient.identifiers[0].identifier, responseUpdate.body.patient.identifiers[0].identifier)
    gauge.message("Patient ID - " + response.body.patient.identifiers[0].identifier)
    gauge.message("Response - " + JSON.stringify(responseUpdate.body))
});

async function validateRegistrationSearchResult(actualResponse, expectedResponse, patientID) {
    assert.equal(actualResponse.statusCode, 200)
    assert.equal(actualResponse.body.pageOfResults[0].identifier, patientID)
    assert.equal(actualResponse.body.pageOfResults[0].givenName, expectedResponse.patient.person.names[0].givenName)
    assert.equal(actualResponse.body.pageOfResults[0].middleName, expectedResponse.patient.person.names[0].middleName)
    assert.equal(actualResponse.body.pageOfResults[0].familyName, expectedResponse.patient.person.names[0].familyName)
    // var phoneNumbers = JSON.parse(actualResponse.body.pageOfResults[0].customAttribute)
    // assert.equal(phoneNumbers.phoneNumber, expectedResponse.patient.person.attributes[1].value)
    // assert.equal(phoneNumbers.alternatePhoneNumber, expectedResponse.patient.person.attributes[2].value)
    gauge.message("Response - " + JSON.stringify(actualResponse.body))
}

step("Verify the search results are fetched by Patient ID", async function () {

    var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    assert.equal(response.statusCode, 200)
    var patientID = response.body.patient.identifiers[0].identifier;

    //get Location UUID
    var loginLocationUUID = await helper.getLoginLocationUUID();
    gauge.message("Login Location UUID - " + loginLocationUUID)

    //Patient ID search
    const responsePatientIDSearch = await httpRequests.customGet(endpoints.LUCENE_SEARCH, { loginLocationUuid: loginLocationUUID, identifier: patientID });
    await validateRegistrationSearchResult(responsePatientIDSearch, payload, patientID)
});

step("Verify the search results are fetched by Patient Name", async function () {

    var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    var fullName = `${payload.patient.person.names[0].givenName} ${payload.patient.person.names[0].middleName} ${payload.patient.person.names[0].familyName}`

    //get Location UUID
    var loginLocationUUID = await helper.getLoginLocationUUID();
    gauge.message("Login Location UUID - " + loginLocationUUID)

    //Patient Name search
    const responsePatientNameSearch = await httpRequests.customGet(endpoints.PATIENT_SEARCH, { loginLocationUuid: loginLocationUUID, q: fullName, customAttribute: "" });
    await validateRegistrationSearchResult(responsePatientNameSearch, payload, response.body.patient.identifiers[0].identifier)
});

step("Verify the search results are fetched by Patient Phone Number", async function () {

    var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    assert.equal(response.statusCode, 200);

    //get Location UUID
    var loginLocationUUID = await helper.getLoginLocationUUID();
    gauge.message("Login Location UUID - " + loginLocationUUID)

    //Patient Phone number search
    const responsePatientPhoneSearch = await httpRequests.customGet(endpoints.PATIENT_SEARCH, { loginLocationUuid: loginLocationUUID, q: "", customAttribute: payload.patient.person.attributes[1].value });
    await validateRegistrationSearchResult(responsePatientPhoneSearch, payload, response.body.patient.identifiers[0].identifier)
});

step("Verify the search results are fetched by Patient Alternate Phone Number", async function () {
    //Create Patient
    var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    assert.equal(response.statusCode, 200);

    //get Location UUID
    var loginLocationUUID = await helper.getLoginLocationUUID();
    gauge.message("Login Location UUID - " + loginLocationUUID)

    //Patient Phone number search
    const responsePatientAltPhoneSearch = await httpRequests.customGet(endpoints.PATIENT_SEARCH, { loginLocationUuid: loginLocationUUID, q: "", customAttribute: payload.patient.person.attributes[2].value });
    await validateRegistrationSearchResult(responsePatientAltPhoneSearch, payload, response.body.patient.identifiers[0].identifier)
});

step("Verify the start visit and end the visit", async function () {
    var payload = gauge.dataStore.scenarioStore.get("payloadCreatePatient");

    //start visit
    var responseStartVisit = await helper.startVisit(payload);
    assert.equal(responseStartVisit.statusCode, 201)
    var visitUUID = responseStartVisit.body.uuid
    gauge.message("Visit UUID - " + visitUUID)

    //End Visit
    const responseEndVisit = await helper.endVisit(visitUUID);
    assert.equal(responseEndVisit.statusCode, 200)
});

step("Create a Patient through API", async function () {
    var payload = await new PatientProfile().initialize();
    const response = await helper.createPatient(payload);
    gauge.dataStore.scenarioStore.put("responseCreatePatient", response);
    gauge.dataStore.scenarioStore.put("payloadCreatePatient", payload);
    gauge.message("Patient ID - " + response.body.patient.identifiers[0].identifier);
    gauge.dataStore.scenarioStore.put("patientIdentifier", response.body.patient.identifiers[0].identifier);
    gauge.dataStore.scenarioStore.put("patientFullName", response.body.patient.person.names[0].display)
});

step("Create a Patient and start visit through API", async function() {
	var payload = await new PatientProfile().initialize();
    const response = await helper.createPatient(payload);
    gauge.dataStore.scenarioStore.put("responseCreatePatient", response);
    gauge.dataStore.scenarioStore.put("payloadCreatePatient", payload);
    gauge.message("Patient ID - " + response.body.patient.identifiers[0].identifier);
    gauge.dataStore.scenarioStore.put("patientIdentifier", response.body.patient.identifiers[0].identifier);
    console.log(response.body.patient.identifiers[0].identifier);
    gauge.dataStore.scenarioStore.put("patientFullName", response.body.patient.person.names[0].display)
    //start visit
    var responseStartVisit = await helper.startVisit(payload);
    assert.equal(responseStartVisit.statusCode, 201)
    gauge.dataStore.scenarioStore.put("loginLocation", expectedValues.LOGIN_LOCATION_NAME)
    gauge.dataStore.scenarioStore.put("visitType", responseStartVisit.body.visitType.display)
});