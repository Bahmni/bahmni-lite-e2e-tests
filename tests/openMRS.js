"use strict";
var assert = require("assert");
var fileExtension = require("./util/fileExtension")
var requestResponse = require("./util/requestResponse");
const date = require("./util/date");

step("Verify openmrs OPD patient details with mobileNumber <mobileNumber>", async function (mobileNumber) {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    var lastName = gauge.dataStore.scenarioStore.get("patientLastName")

    var patientName = firstName+"+"+lastName
    var patientYearOfBirth = "2000"
    var patientGender = "F"
    var phoneNumber = mobileNumber
    var existingPatientsURL = process.env.bahmniHost+ process.env.openMRSRestAPIPrefix+ "/existingPatients?patientName="+patientName
    +"&patientYearOfBirth="+patientYearOfBirth+"&patientGender="+patientGender+"&phoneNumber="+phoneNumber;
    
    var existingPatientsResponse = await requestResponse.getOpenMRSResponse(existingPatientsURL)

    const patientUUID = existingPatientsResponse.data[0].uuid;
    var OPDPrescriptions = await requestResponse.makeOpenVisitCall(patientUUID,"OPD",process.env.visitPrescriptions)
    assert.ok(OPDPrescriptions!=null && OPDPrescriptions.prescriptions!=null)
    for(var prescription of OPDPrescriptions.prescriptions){
        assert.ok(prescription.careContext!=null)
        assert.ok(prescription.careContext.careContextReference=="OPD")
        assert.ok(prescription.bundle!=null)
        var prescriptionFile = gauge.dataStore.scenarioStore.get("prescriptions")
        var prescriptionDetails = JSON.parse(fileExtension.parseContent(prescriptionFile))
        var medication = parseInt(prescriptionDetails.dose).toFixed(1)+" "+prescriptionDetails.units+" "+ prescriptionDetails.frequency+"  "+prescriptionDetails.duration+" Day(s) "
        assert.equal(prescription.bundle.entry[4].resource.dosageInstruction[0].text,medication)
    }

    var OPDDiagnostics = await requestResponse.makeOpenVisitCall(patientUUID,"OPD",process.env.visitDiagnosticReports)
    assert.ok(OPDDiagnostics!=null && OPDDiagnostics.diagnosticReports!=null)
    // for(var diagnosticReport of OPDPrescriptions.diagnosticReports){
    //     assert.ok(diagnosticReport.careContext!=null)
    //     assert.ok(diagnosticReport.careContextReference=="OPD")
    //     assert.ok(diagnosticReport.bundle!=null)
    // }
});

step("Verify openmrs IPD patient details with mobileNumber <mobileNumber>", async function(mobileNumber) {
    var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    var lastName = gauge.dataStore.scenarioStore.get("patientLastName")

    var patientName = firstName+"+"+lastName
    var patientYearOfBirth = "2000"
    var patientGender = "F"
    var phoneNumber = mobileNumber
    var existingPatientsURL = process.env.bahmniHost+ process.env.openMRSRestAPIPrefix+ "/existingPatients?patientName="+patientName
    +"&patientYearOfBirth="+patientYearOfBirth+"&patientGender="+patientGender+"&phoneNumber="+phoneNumber;
    
    var existingPatientsResponse = await requestResponse.getOpenMRSResponse(existingPatientsURL)

    const patientUUID = existingPatientsResponse.data[0].uuid;
    var IPDPrescriptions = await requestResponse.makeOpenVisitCall(patientUUID,"IPD",process.env.visitPrescriptions)
    var IPDDiagnostics = await requestResponse.makeOpenVisitCall(patientUUID,"IPD",process.env.visitDiagnosticReports)
});

