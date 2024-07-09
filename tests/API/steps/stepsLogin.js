const endpoints = require('../constants/apiConstants').endpoints;
const expectedValues = require('../constants/apiConstants').expectedValues;
const httpRequests = require('../util/httpRequest')
const assert = require("assert");
step("Verify the login location is returning status code 200", async function () {
    const response = await httpRequests.customGet(endpoints.LOGIN_LOCATION);
    assert.equal(response.statusCode, 200)
    gauge.message("Response - " + JSON.stringify(response.body))
});

step("Verify login location is returning valid location", async function () {
    const response = await httpRequests.customGet(endpoints.LOGIN_LOCATION);
    assert.equal(1, response.body.results.filter(locations => locations.name == expectedValues.LOGIN_LOCATION_NAME).length)
    gauge.message("Response - " + JSON.stringify(response.body))
});

