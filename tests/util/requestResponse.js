const path = require('path');
const axios = require('axios')
var date = require("./date");
const assert = require("assert");

async function getOpenMRSResponse(request){
    console.log(request)
    gauge.message(request)

    return await axios.get(request
        , {
            headers: {
                'Authorization': `token ${process.env.receptionist}`
            }
        })
}

async function makeOpenVisitCall(patientUUID,visitType,URL){
    var yesterday = date.getyyyymmddFormattedDate(date.yesterday())
    var tomorrow = date.getyyyymmddFormattedDate(date.tomorrow())

    var request_URL = process.env.bahmniHost+URL
        .replace("<patientId>",patientUUID)
        .replace("<fromDate>",yesterday)
        .replace("<toDate>",tomorrow)
        .replace("<visitType>",visitType)

    console.log(request_URL)
    gauge.message(request_URL)
    var prescriptionsVisitResponse = await getOpenMRSResponse(request_URL)

    assert.ok(prescriptionsVisitResponse.status==200)
    gauge.message(prescriptionsVisitResponse.data);
    gauge.message(prescriptionsVisitResponse.headers);
    gauge.message(prescriptionsVisitResponse.config);

    return prescriptionsVisitResponse.data;
}

async function makeOpenProgramCall(patientUUID,programName,programEnrollmentId,URL){
    var yesterday = date.getyyyymmddFormattedDate(date.yesterday())
    var tomorrow = date.getyyyymmddFormattedDate(date.tomorrow())

    var request_URL = process.env.bahmniHost+URL
        .replace("<patientId>",patientUUID)
        .replace("<fromDate>",yesterday)
        .replace("<toDate>",tomorrow)
        .replace("<programName>",programName)
        .replace("<programEnrollmentId>",programEnrollmentId)

    console.log(request_URL)
    gauge.message(request_URL)
    var prescriptionsVisitResponse = await getOpenMRSResponse(request_URL)

    assert.ok(prescriptionsVisitResponse.status==200)

    gauge.message(prescriptionsVisitResponse.data);
    gauge.message(prescriptionsVisitResponse.headers);
    gauge.message(prescriptionsVisitResponse.config);

    return prescriptionsVisitResponse.data;
}

module.exports={
    getOpenMRSResponse:getOpenMRSResponse,
    makeOpenVisitCall:makeOpenVisitCall,
    makeOpenProgramCall:makeOpenProgramCall,
}