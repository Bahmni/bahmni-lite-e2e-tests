const httpRequests = require('../util/httpRequest')
const endpoints = require('../constants/apiConstants').endpoints;
const expectedValues = require('../constants/apiConstants').expectedValues;
const PatientProfile = require('../payloads/patientProfile');

async function getPersonAttributeUUID(attributeName) {
    return await (await httpRequests.customGet(endpoints.PERSON_ATTRIBUTE_TYPE)).body.results.filter(attributes => attributes.name == attributeName)[0].uuid;
}

// async function getPatientIdentifierTypeUUID() {
//     return await (await httpRequests.customGet(endpoints.PATIENT_IDENTIFIER_TYPE)).body.results.filter(attributes => attributes.name == "Patient Identifier")[0].uuid;
// }

async function getLoginLocationUUID() {
    return await (await httpRequests.customGet(endpoints.LOGIN_LOCATION)).body.results.filter(locations => locations.name == expectedValues.LOGIN_LOCATION_NAME)[0].uuid;
}

async function getVisitTypeUUID() {
    return await (await httpRequests.customGet(endpoints.VISIT_TYPE)).body.results.filter(visitTypes => visitTypes.display == expectedValues.VISIT_TYPE)[0].uuid;
}

async function createPatient(payload) {
    return await httpRequests.customPost(endpoints.PATIENT_PROFILE, JSON.stringify(payload));
}

async function startVisit(createPatientPayload) {
    //create Patient
    const response = gauge.dataStore.scenarioStore.get("responseCreatePatient");

    //get Patient UUID
    var patientUUID = response.body.patient.uuid;
    gauge.message("patient UUID - " + patientUUID);

    //get Location UUID
    var loginLocationUUID = await getLoginLocationUUID();
    gauge.message("Login Location UUID - " + loginLocationUUID);

    //get visit type UUID
    var visitTypeUUID = await getVisitTypeUUID();
    gauge.message("Visit Type UUID - " + visitTypeUUID);

    //Start a visit
    var payloadStartVisit = { patient: patientUUID, visitType: visitTypeUUID, location: loginLocationUUID }
    return await httpRequests.customPost(endpoints.VISIT_START, JSON.stringify(payloadStartVisit));
}

async function endVisit(visitUUID) {
    var payloadEndVisit = { withCredentials: true }
    return await httpRequests.customPost(endpoints.VISIT_END, JSON.stringify(payloadEndVisit), { visitUuid: visitUUID })
}

async function getProviderUuid() {
    var username = "superman";
    return await (await httpRequests.customGet(endpoints.PROVIDER, { q: username })).body.results.filter(providers => providers.identifier == username)[0].uuid;
}

async function getActivePatients() {
    return await httpRequests.customGet(endpoints.ACTIVE_PATIENT_QUEUE, { location_uuid: await getLoginLocationUUID(), provider_uuid: await getProviderUuid() });
}

async function getConsultationEncounterUUID() {
    return getEncounterTypeUUID(expectedValues.CONSULTATION_ENCOUNTER);
}

async function getEncounterTypeUUID(encountertype) {
    return await (await httpRequests.customGet(endpoints.ENCOUNTER_TYPE)).body.results.filter(encounterTypes => encounterTypes.display == encountertype)[0].uuid;
}

async function getPatientUUID() {
    var responseCreatePatient = gauge.dataStore.scenarioStore.get("responseCreatePatient");
    if (!responseCreatePatient) {
        var payload = await new PatientProfile().initialize();
        responseCreatePatient = await createPatient(payload);
        gauge.dataStore.scenarioStore.put("responseCreatePatient", response);
        gauge.dataStore.scenarioStore.put("payloadCreatePatient", payload);
        gauge.message("Patient ID - " + response.body.patient.identifiers[0].identifier);
    }
    return responseCreatePatient.body.patient.uuid;
}

async function getConceptClassUUID(strClass) {
    return await (await httpRequests.customGet(endpoints.CONCEPT_CLASS)).body.results.filter(conceptClasses => conceptClasses.display == strClass)[0].uuid;
}

async function getDataTypeUUID(strType) {
    return await (await httpRequests.customGet(endpoints.CONCEPT_DATA_TYPE)).body.results.filter(dataTypes => dataTypes.display == strType)[0].uuid;
}

async function getConceptAttributeUUID() {
    return await (await httpRequests.customGet(endpoints.CONCEPT_ATTRIBUTE_TYPE)).body.results.filter(attributes => attributes.display == expectedValues.ATTRIBUTE_TYPE_SALEABLE)[0].uuid;
}

async function setSaleableAttribute(blnSaleable) {
    if (blnSaleable == null) {
        return []
    }
    else {
        return [{ "attributeType": await getConceptAttributeUUID(), "value": blnSaleable }]
    }
}

module.exports = {
    getPersonAttributeUUID,
    getLoginLocationUUID,
    getVisitTypeUUID,
    createPatient,
    startVisit,
    endVisit,
    getProviderUuid,
    getActivePatients,
    getConsultationEncounterUUID,
    getPatientUUID,
    getConceptClassUUID,
    getDataTypeUUID,
    getConceptAttributeUUID,
    setSaleableAttribute
};