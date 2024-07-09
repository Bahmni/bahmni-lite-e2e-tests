const fs = require('fs');
const { faker } = require('@faker-js/faker/locale/en_IND');
const httpRequests = require('../util/httpRequest');
const endpoints = require('../constants/apiConstants').endpoints;
class PatientProfile {
    async initialize() {
        this.data = JSON.parse(fs.readFileSync('./tests/API/payloads/patientProfile.json'));
        this.data.patient.person.names[0].givenName = faker.name.firstName();
        this.data.patient.person.names[0].middleName = faker.name.middleName();
        this.data.patient.person.names[0].familyName = faker.name.lastName();
        this.data.patient.person.addresses[0].address1 = faker.address.streetAddress().replace(/[^a-zA-Z0-9\s]/g, '');
        this.data.patient.person.addresses[0].address2 = faker.address.secondaryAddress().replace(/[^a-zA-Z0-9\s]/g, '');
        this.data.patient.person.addresses[0].address3 = faker.address.street().replace(/[^a-zA-Z0-9\s]/g, '');
        this.data.patient.person.addresses[0].cityVillage = faker.address.city().replace(/[^a-zA-Z0-9\s]/g, '');
        this.data.patient.person.addresses[0].countyDistrict = faker.address.county();
        this.data.patient.person.addresses[0].stateProvince = faker.address.state();
        this.data.patient.person.birthdate = faker.date.between('1950-01-01', '2003-12-31').toISOString().split('T')[0];
        this.data.patient.person.gender = faker.name.sexType().charAt(0).toUpperCase();
        // this.data.patient.person.attributes[0].attributeType.uuid = await helper.getPersonAttributeUUID("email")
        // this.data.patient.person.attributes[0].value = faker.internet.email();
        // this.data.patient.person.attributes[1].attributeType.uuid = await helper.getPersonAttributeUUID("phoneNumber")
        // this.data.patient.person.attributes[1].value = faker.phone.number('+919#########');
        // this.data.patient.person.attributes[2].attributeType.uuid = await helper.getPersonAttributeUUID("alternatePhoneNumber")
        // this.data.patient.person.attributes[2].value = faker.phone.number('+919#########');
        this.data.patient.identifiers[0].identifierType = await getPatientIdentifierTypeUUID();
        return this.data;
    }

}
async function getPatientIdentifierTypeUUID() {
    return await (await httpRequests.customGet(endpoints.PATIENT_IDENTIFIER_TYPE)).body.results.filter(attributes => attributes.name == "Patient Identifier")[0].uuid;
}
module.exports = PatientProfile;