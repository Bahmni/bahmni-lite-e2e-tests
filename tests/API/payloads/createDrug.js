const fs = require('fs');
const helper = require('../util/helper');
const users = require('../../../bahmni-e2e-common-flows/tests/util/users')

class CreateDrug {
    async initialize() {
        this.data = JSON.parse(fs.readFileSync('./tests/API/payloads/createDrug.json'));
        this.data.name = users.randomName(10);
        return this.data;
    }
}

module.exports = CreateDrug;