const endpoints = require('../constants/apiConstants').endpoints;
const expectedValues = require('../constants/apiConstants').expectedValues;
const httpRequests = require('../util/httpRequest')
const assert = require("assert");
const helper = require('../util/helper');
const CreateConcept = require('../payloads/CreateConcept');
const CreateDrug = require('../payloads/CreateDrug');

step("Create a concept of type <type> with class <class> and salable as <salable>", async function (strType, strClass, blnSaleable) {
    const responseCreateConcept = await createConcept(strType, strClass, blnSaleable);
    assert.equal(responseCreateConcept.statusCode, 201);
    gauge.dataStore.scenarioStore.put("conceptName", responseCreateConcept.body.display);
});

step("Create a concept of type <type> with class <class>", async function (strType, strClass) {
    const responseCreateConcept = await createConcept(strType, strClass);
    assert.equal(responseCreateConcept.statusCode, 201);
    gauge.dataStore.scenarioStore.put("conceptName", responseCreateConcept.body.display);
    console.log("Concept Name - " + responseCreateConcept.body.display);
});

async function createConcept(strType, strClass, blnSaleable = null) {
    var payload = await new CreateConcept().initialize(strType, strClass, blnSaleable);
    return await httpRequests.customPost(endpoints.CONCEPT, JSON.stringify(payload));
}

step("Create a drug", async function () {
    var payload = await new CreateDrug().initialize();
    const response = await httpRequests.customPost(endpoints.DRUG, JSON.stringify(payload));
    assert.equal(response.statusCode, 201);
    gauge.dataStore.scenarioStore.put("conceptName", response.body.display);
    console.log("Drug Name - " + response.body.display);
});