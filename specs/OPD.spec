# OPD Visits

## Old Uploaded Patient data should be available for billing

tags: hospital, lab, payment

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
* Enter vitals "opConsultation/Vitals"
* Doctor advises medicines "opd/prescriptionFlow/medication/paracetamol" and tests "opd/prescriptionFlow/lab/Haemogram"
* Login to Open ELIS
* Collect Sample
* Enter blood Lab results
* click Send Anyway
* Validate lab result "details" in samples collected
* click Send Anyway
* Login to Odoo
* Convert Quotation to Sales
* Confirm Sales

## Doctor should be able to prescribe radiology tests

tags: hospital, radiology

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

## Doctor should be able to prescribe medicines and tests and get relevant reports

tags: hospital, lab, payment

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals "opConsultation/Vitals"
* Doctor advises medicines "opd/prescriptionFlow/medication/paracetamol" and tests "opd/prescriptionFlow/lab/Haemogram"
* Login to Open ELIS
* Collect Sample
* Enter blood Lab results
* click Send Anyway
* Validate lab result "details" in samples collected
* click Send Anyway
* Login to Odoo
* Convert Quotation to Sales
* Confirm Sales
* Goto Clinical application
* Open clinical tab with all section
* verify name with id
* verify OPD
* Verify medical prescription in patient clinical dashboard
* Verify vitals
* Doctor clicks consultation
* Doctor notes the diagnosis and conditions "consultation/diagnosis/diagnosis_condition"
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
