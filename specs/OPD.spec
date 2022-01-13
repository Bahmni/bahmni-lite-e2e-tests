# OPD Visits
|mobileNumber|
|+91-9876543210|

## Doctor should be able to prescribe medicines and tests, relevant reports can be uploaded
Tags: core
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number <mobileNumber> and starts an OPD
* Nurse initiates clinical checkup
* Doctor advises medicines "opd/prescriptionFlow/prescriptions" and tests "opd/prescriptionFlow/labTests"
* visit is closed at the front desk
* Verify data sync in radiology
* Login to Odoo
* View Direct Sales Quotation
* Confirm Sales

## Should be able to get OPConsultation notes of a patient
Tags: E2E
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number <mobileNumber> and starts an OPD
* Nurse opens clinical tab
* Nurse captures BP, sugar checkup
* Doctor captures the consultation notes "consultationNotes" for newly created patient
* Doctor advises medicines "opd/prescriptionFlow/prescriptions" and tests "opd/prescriptionFlow/labTests"
* Login to Open ELIS
* Collect Sample
* Enter blood Lab results
* Enter serum Lab results
* Validate lab result "details" in samples collected
* Goto Clinical module
* visit is closed at the front desk

