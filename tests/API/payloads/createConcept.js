const fs = require('fs');
const helper = require('../util/helper');
const users = require('../../../bahmni-e2e-common-flows/tests/util/users')

class CreateConcept {
    async initialize(strType, strClass, blnSaleable) {
        this.data = JSON.parse(fs.readFileSync('./tests/API/payloads/createConcept.json'));
        this.data.names[0].name = users.randomName(10);
        this.data.conceptClass = await helper.getConceptClassUUID(strClass);
        this.data.datatype = await helper.getDataTypeUUID(strType);
        this.data.attributes = await helper.setSaleableAttribute(blnSaleable);
        return this.data;
    }
}

module.exports = CreateConcept;