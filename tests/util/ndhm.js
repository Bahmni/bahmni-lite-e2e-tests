"use strict";

const {
    intercept
} = require('taiko');
const axios = require('axios')
var fileExtension = require("./fileExtension");

async function interceptFetchModes(token) {
    //https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/
    var body1 = {
        "authModes": [
            "MOBILE_OTP",
            "AADHAAR_OTP"
        ]
    };
    var reqBodyOnFetchModes = JSON.stringify(body1);
    var response = {
        method: 'POST',
        port: '9052',
        hostname: process.env.bahmniHost,
        path: '/v0.5/users/auth/on-fetch-modes',
        body: body1,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': reqBodyOnFetchModes.length,
            'X-HIP-ID': '10000005'
        }
    }
    
    await intercept(process.env.bahmniHost+ "/ndhm/null/v0.5/hip/fetch-modes", response,1)
    await intercept(process.env.bahmniHost+ "/hiprovider/v0.5/hip/fetch-modes", response,1)
    gauge.message("intercepted"+process.env.bahmniHost+ "/hiprovider/v0.5/hip/fetch-modes")
}

async function interceptAuthInit(token) {
    var reqBodyOnFetchModes = JSON.stringify("");
    var response = {
        method: 'POST',
        port: '9052',
        hostname: process.env.bahmniHost,
        path: '/v0.5/users/auth/on-init',
        body: {},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': reqBodyOnFetchModes.length,
            'X-HIP-ID': '10000005'
        }
    }

    await intercept(process.env.bahmniHost+ "/hiprovider/v0.5/hip/auth/init", response,1)
    await intercept(process.env.bahmniHost+ "/ndhm/null/v0.5/hip/auth/init", response,1)
    gauge.message("intercepted"+process.env.bahmniHost+ "/hiprovider/v0.5/hip/auth/init")

}

async function redirectExistingPatients(token,firstName,lastName,yearOfBirth,gender,mobileNumber){
    var fullName = (lastName=="")? firstName:firstName+"+"+lastName

    var newURL = process.env.bahmniHost+ process.env.openMRSRestAPIPrefix+ "/existingPatients?patientName=" + fullName
    + "&patientYearOfBirth=" + yearOfBirth + "&patientGender=" + gender+"&phoneNumber=%2B"+mobileNumber;
    console.log(newURL)

    var data = JSON.stringify((await axios.get(newURL, {
            headers: {
                'Authorization': `token ${process.env.receptionist}`
            }
        })).data)
    var response ={
        method: 'POST',
        port: '9052',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': data.length
        }
    }

    var properExistingPatientUrl = process.env.bahmniHost+ "/ndhm/null/existingPatients?patientName=" + fullName
    + "&patientYearOfBirth=" + yearOfBirth + "&patientGender=" + gender+"&phoneNumber=%2B"+(mobileNumber.split('+')[1]==null)?mobileNumber:mobileNumber.split('+')[1];

    await intercept(properExistingPatientUrl, response,1);
}

async function interceptAuthConfirm(token,healthID,firstName,lastName,yearOfBirth,gender,patientMobileNumber){
    var confirm = fileExtension.parseContent("./data/confirm/simple.txt")
    .replace('<healthID>', healthID)
    .replace('<fullName>', firstName +" " + lastName)
    .replace('<gender>', gender)
    .replace('<yearOfBirth>', yearOfBirth)
    .replace('<district>', "NORTH AND MIDDLE ANDAMAN")
    .replace('<state>', "ANDAMAN AND NICOBAR ISLANDS")
    .replace('<mobileNumber>', patientMobileNumber)
    .replace('<healthNumber>', "00-0000-0000-0000");
    var response = {
        method: 'POST',
        port: '9052',
        hostname: process.env.bahmniHost,
        path: '/v0.5/users/auth/on-init',
        body: confirm,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': confirm.length,
            'X-HIP-ID': '10000005'
        }
    }
    await intercept(process.env.bahmniHost+ "/hiprovider/v0.5/hip/auth/confirm", response,1);
    await intercept(process.env.bahmniHost+ "/ndhm/null/v0.5/hip/auth/confirm", response,1);
    gauge.message("intercepted"+process.env.bahmniHost+ "/hiprovider/v0.5/hip/auth/confirm")
}

async function interceptExistingPatients(token, healthID){
    var body1 = {
        "error": { "code": "PATIENT_ID_NOT_FOUND", "message": "No patient found" }
    };
    var reqBodyOnFetchModes = JSON.stringify(body1);
    var response ={
        method: 'POST',
        port: '9052',
        body: body1,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': reqBodyOnFetchModes.length
        }
    }
    await intercept(process.env.bahmniHost+ process.env.openMRSRestAPIPrefix+ "/existingPatients/" + healthID, response,1)
    await intercept(process.env.bahmniHost+ "/ndhm/null/existingPatients/" + healthID, response,1)
    gauge.message("intercepted"+process.env.bahmniHost+ process.env.openMRSRestAPIPrefix+ "/existingPatients/" + healthID)
}

async function interceptExistingPatientsWithParams(token,firstName,lastName,yearOfBirth,gender){
    var fullName = (lastName=="")? firstName:firstName+" "+lastName
    var existingPatientUrl = process.env.bahmniHost+ "/ndhm/null/existingPatients/?patientName=" + fullName
    + "&patientYearOfBirth=" + yearOfBirth + "&patientGender=" + gender;

    var properExistingPatientUrl = process.env.bahmniHost+ process.env.openMRSRestAPIPrefix+ "/existingPatients?patientName=" + fullName
    + "&patientYearOfBirth=" + yearOfBirth + "&patientGender=" + gender;

    var body1 = {
        "error": { "code": "PATIENT_ID_NOT_FOUND", "message": "No patient found" }
    };
    var reqBodyOnFetchModes = JSON.stringify(body1);
    var response = {
        method: 'GET',
        port: '9052',
        body: body1,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'content-length': reqBodyOnFetchModes.length
        }
    }

    await intercept(existingPatientUrl, (request) => response,1);
    await intercept(properExistingPatientUrl, (request) => response,1);
}

module.exports={
    interceptFetchModes:interceptFetchModes,
    interceptAuthInit:interceptAuthInit,
    interceptExistingPatients:interceptExistingPatients,
    interceptAuthConfirm:interceptAuthConfirm,
    redirectExistingPatients:redirectExistingPatients,
    interceptExistingPatientsWithParams:interceptExistingPatientsWithParams
}

