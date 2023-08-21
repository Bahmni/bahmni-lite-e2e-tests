const endpoints = {
    LOGIN_LOCATION: "/openmrs/ws/rest/v1/location?operator=ALL&s=byTags&tags=Login+Location&v=default",
    PATIENT_PROFILE: "/openmrs/ws/rest/v1/bahmnicore/patientprofile",
    PERSON_ATTRIBUTE_TYPE: "/openmrs/ws/rest/v1/personattributetype?v=default",
    PATIENT_IDENTIFIER_TYPE: "/openmrs/ws/rest/v1/patientidentifiertype?v=default",
    LUCENE_SEARCH: "/openmrs/ws/rest/v1/bahmni/search/patient/lucene?filterOnAllIdentifiers=false&patientAttributes=phoneNumber&patientAttributes=alternatePhoneNumber&patientSearchResultsConfig=phoneNumber&patientSearchResultsConfig=alternatePhoneNumber&programAttributeFieldValue=&s=byIdOrNameOrVillage&startIndex=0",
    PATIENT_SEARCH: "/openmrs/ws/rest/v1/bahmni/search/patient?addressFieldValue=&patientAttributes=phoneNumber&patientAttributes=alternatePhoneNumber&patientSearchResultsConfig=phoneNumber&patientSearchResultsConfig=alternatePhoneNumber&programAttributeFieldValue=&s=byIdOrNameOrVillage&startIndex=0",
    VISIT_TYPE: "/openmrs/ws/rest/v1/visittype",
    VISIT_START: "/openmrs/ws/rest/v1/visit",
    VISIT_END: "/openmrs/ws/rest/v1/bahmnicore/visit/endVisit",
    ACTIVE_PATIENT_QUEUE: "/openmrs/ws/rest/v1/bahmnicore/sql?q=emrapi.sqlSearch.activePatients&v=full",
    PROVIDER: "/openmrs/ws/rest/v1/provider?v=default",
    ENCOUNTER_TYPE: "/openmrs/ws/rest/v1/encountertype",
    BAHMNI_ENCOUNTER: "/openmrs/ws/rest/v1/bahmnicore/bahmniencounter",
    DIAGNOSIS_SEARCH:"/openmrs/ws/rest/v1/concept",
    SNOWSTORM_URL:"https://snowstorm.snomed.mybahmni.in/fhir/ValueSet/$expand",
    ECL_QUERY:"http://snomed.info/sct?fhir_vs=ecl/<<",
    VALUESET_URL:"http://bahmni.org/fhir/ValueSet/bahmni-valueset-hospitalisation"
}

const expectedValues = {
    LOGIN_LOCATION_NAME: "Bahmni Clinic",
    VISIT_TYPE: "OPD",
    CONSULTATION_ENCOUNTER: "Consultation"
}

module.exports = {
    endpoints,
    expectedValues
};