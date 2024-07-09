const endpoints = {
    LOGIN_LOCATION: "/openmrs/ws/rest/v1/location?operator=ALL&s=byTags&tags=Login+Location&v=default",
    PATIENT_PROFILE: "/openmrs/ws/rest/v1/bahmnicore/patientprofile",
    PERSON_ATTRIBUTE_TYPE: "/openmrs/ws/rest/v1/personattributetype?v=default",
    PATIENT_IDENTIFIER_TYPE: "/openmrs/ws/rest/v1/patientidentifiertype?v=default",
    LUCENE_SEARCH: "/openmrs/ws/rest/v1/bahmni/search/patient/lucene?addressFieldName=address2&addressSearchResultsConfig=address2&filterOnAllIdentifiers=true&patientAttributes=givenNameLocal&patientAttributes=middleNameLocal&patientAttributes=familyNameLocal&patientSearchResultsConfig=givenNameLocal&patientSearchResultsConfig=middleNameLocal&patientSearchResultsConfig=familyNameLocal&programAttributeFieldValue=&s=byIdOrNameOrVillage&startIndex=0",
    PATIENT_SEARCH: "/openmrs/ws/rest/v1/bahmni/search/patient?addressFieldName=address2&addressFieldValue=&addressSearchResultsConfig=address2&patientAttributes=givenNameLocal&patientAttributes=middleNameLocal&patientAttributes=familyNameLocal&patientSearchResultsConfig=givenNameLocal&patientSearchResultsConfig=middleNameLocal&patientSearchResultsConfig=familyNameLocal&programAttributeFieldValue=&s=byIdOrNameOrVillage&startIndex=0",
    VISIT_TYPE: "/openmrs/ws/rest/v1/visittype",
    VISIT_START: "/openmrs/ws/rest/v1/visit",
    VISIT_END: "/openmrs/ws/rest/v1/bahmnicore/visit/endVisit",
    ACTIVE_PATIENT_QUEUE: "/openmrs/ws/rest/v1/bahmnicore/sql?q=emrapi.sqlSearch.activePatients&v=full",
    PROVIDER: "/openmrs/ws/rest/v1/provider?v=default",
    ENCOUNTER_TYPE: "/openmrs/ws/rest/v1/encountertype",
    BAHMNI_ENCOUNTER: "/openmrs/ws/rest/v1/bahmnicore/bahmniencounter",
    CONCEPT_CLASS: "/openmrs/ws/rest/v1/conceptclass",
    CONCEPT_DATA_TYPE: "/openmrs/ws/rest/v1/conceptdatatype",
    CONCEPT_ATTRIBUTE_TYPE: "/openmrs/ws/rest/v1/conceptattributetype",
    CONCEPT: "/openmrs/ws/rest/v1/concept",
    DRUG: "/openmrs/ws/rest/v1/drug"

}

const expectedValues = {
    LOGIN_LOCATION_NAME: "General Ward",
    VISIT_TYPE: "OPD",
    CONSULTATION_ENCOUNTER: "Consultation",
    ATTRIBUTE_TYPE_SALEABLE: "saleable"
}

module.exports = {
    endpoints,
    expectedValues
};