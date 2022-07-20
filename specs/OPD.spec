# OPD Visits

## Old Uploaded Patient data should be available for billing

tags: hospital

* Login to Bahmni location "General Ward" as a "receptionist"
* Open "Admin" module
* Open "CSV Upload"
* Upload "Patient" data file
* Upload "Encounter" data file
* Click back button
* Click back button
* Choose a random uploaded patient identifier
* Open "Registration" module
* Open newly created patient details by search
* Start an OPD Visit
* Open clinical tab
* Enter vitals
* Doctor advises medicines "opd/prescriptionFlow/medication/paracetamol" and tests "opd/prescriptionFlow/lab/Haemogram"
* Login to Open ELIS
* Collect Sample
* Enter blood Lab results
* click Send Anyway
* Validate lab result "details" in samples collected
* click Send Anyway
* Login to Odoo
* Convert Quotation to Sales
* View Direct Sales Quotation
* Confirm Sales

## Doctor should be able to prescribe radiology tests

tags: hospital

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Open "Orders" Tab
* Place a radiology order for test "chest lateral"
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
* verify patient details on DCM4chee

## Create data for paymentLite

tags: payment-lite

* put doctor first name "d3FirstName" middle name "d3MiddleName" lastname "d3LastName"
* put medications "opd/prescriptionFlow/medication/payment-lite"
* Login to paymentLite
* Create a doctor in paymentLite with consultation fee "15000"
* Create drug with price "1000"

## Doctor and medicines should be billed in paymentlite

tags: lite

* put randomly generated names for patient
* put doctor first name "d3FirstName" middle name "d3MiddleName" lastname "d3LastName"
* put medications "opd/prescriptionFlow/medication/payment-lite"
* Login to paymentLite
* Create a patient in patientLite
* Raise an invoice for patient
* Collect the payment from the patient
* Verify the payment is complete

## Doctor should be able to prescribe medicines and tests and get relevant reports

tags: hospital

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

tags: hospital

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

## Doctor should be able to prescribe medicines and tests and get relevant reports from LabLite

tags: lite, lab

* Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* Receptionist creates the patient with mobile number "mobileNumber" without village
* Click Start OPD Visit
* Logout and Login to Bahmni location "Bahmni Clinic" as a "doctor"
* Open clinical tab
* Doctor prescribes tests "opd/prescriptionFlow/lab/Haemogram"
* Goto Clinical application
* Open "Lab entry" module
* Open a patient in lablite
* Verify the open orders in Lablite
* Upload and verify report in lablite
Verify order is removed from Pending lab orders table
* Goto Clinical application
* Open clinical tab with all section
* verify name with id
verify the document uploaded/Reports table is available in patient dashboard
* Logout and Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* visit is closed at the front desk
