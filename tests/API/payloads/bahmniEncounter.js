const fs = require('fs');
const helper = require('../util/helper');

class BahmniEncounter {
    async initialize() {
        this.data = JSON.parse(fs.readFileSync('./tests/API/payloads/bahmniEncounter.json'));
        this.data.encounterTypeUuid = await helper.getConsultationEncounterUUID();
        this.data.patientUuid = await helper.getPatientUUID();
        this.data.providers[0].uuid = await helper.getProviderUuid();
        return this.data;
    }
}

module.exports = BahmniEncounter;