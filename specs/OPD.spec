# OPD Visits

## Doctor should be able to prescribe radiology tests
Tags: hospital
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Open "Orders" Tab
* Place a radiology order for test "chest, 1 view (x-ray)"
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
* verify patient details on DCM4chee

## Doctor should be able to prescribe medicines and tests and get relevant reports from LabLite
Tags: clinic
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals
* Doctor advises medicines "opd/prescriptionFlow/medication/paracetamol" and tests "opd/prescriptionFlow/lab/Haemogram"
* Goto Clinical application
* Open "Lab entry" module
* Open a patient in lablite
* Goto Clinical application
* Open clinical tab with all section
* verify name with id
* verify OPD
* verify prescription "opd/prescriptionFlow/medication/paracetamol"
* verify vitals
* Doctor clicks consultation
* Doctor notes the diagnosis
* Save data
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk

## Create data for paymentLite
Tags: payment-lite
* put doctor first name "d3FirstName" middle name "d3MiddleName" lastname "d3LastName"
* put medications "opd/prescriptionFlow/medication/payment-lite"
* Login to paymentLite
* Create a doctor in paymentLite with consultation fee "15000"
* Create drug with price "1000"

## Doctor and medicines should be billed in paymentlite
Tags: payment-lite
* put randomly generated names for patient
* put doctor first name "d3FirstName" middle name "d3MiddleName" lastname "d3LastName"
* put medications "opd/prescriptionFlow/medication/payment-lite"
* Login to paymentLite
* Create a patient in patientLite
* Raise an invoice for patient
* Collect the payment from the patient
* Verify the payment is complete

## Doctor should be able to prescribe medicines and tests and get relevant reports
Tags: hospital
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals
* Doctor advises medicines "opd/prescriptionFlow/medication/paracetamol" and tests "opd/prescriptionFlow/lab/Haemogram"
* Login to Open ELIS
* Collect Sample
* Enter blood Lab results
* click Send Anyway
* Enter serum Lab results
* click Send Anyway
* Validate lab result "details" in samples collected
* click Send Anyway
* Login to Odoo
* Convert Quotation to Sales
* View Direct Sales Quotation
* Confirm Sales
* Goto Clinical application
* Open clinical tab with all section
* verify name with id
* verify OPD
* verify prescription "opd/prescriptionFlow/medication/paracetamol"
* verify vitals
* Doctor clicks consultation
* Doctor notes the diagnosis
* Save data
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk

## Bacteriology staff should be able to collect sample
Tags: clinic
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Collect sample in Bacteriology
* Click back button
* Click back button
* Open clinical tab with all section
* verify bacteriology details
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
