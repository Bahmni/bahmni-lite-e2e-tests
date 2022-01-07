"use strict";
const {
    intercept
} = require('taiko');
const axios = require('axios')

var fileExtension = require("./fileExtension");

async function interceptAdmissionLocation(token) {
    var body1 = JSON.parse(fileExtension.parseContent("./data/admission/admissionLocation.json"))
    var reqBodyOnFetchModes = JSON.stringify(body1);
    var response = {
        method: 'POST',
        port: '9052',
        hostname: process.env.bahmniHost,
        body: body1,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': reqBodyOnFetchModes.length,
            'X-HIP-ID': '10000005'
        }
    }
    
    await intercept(process.env.bahmniHost+ "/openmrs/ws/rest/v1/admissionLocation/", (request) => {
        request.respond(response)
    },1)
}

async function interceptGeneralWard(token) {
    var generalWard = process.env.generalWard
    var body1 = JSON.parse(fileExtension.parseContent("./data/admission/admissionGeneralWard.json"))
    var reqBodyOnFetchModes = JSON.stringify(body1);
    var response = {
    method: 'POST',
    port: '9052',
    hostname: process.env.bahmniHost,
    body: body1,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        'content-length': reqBodyOnFetchModes.length,
        'X-HIP-ID': '10000005'
    }
    }

    await intercept(process.env.bahmniHost+ "/openmrs/ws/rest/v1/admissionLocation/"+generalWard+"?v=full", (request) => {
        request.respond(response)
    },1)

}

module.exports={
    interceptAdmissionLocation:interceptAdmissionLocation,
    interceptGeneralWard:interceptGeneralWard,
}