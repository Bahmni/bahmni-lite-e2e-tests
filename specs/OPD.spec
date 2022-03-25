# OPD Visits

## Doctor should be able to prescribe radiology tests
Tags: smoke
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Nurse opens clinical tab
* Open "Orders" Tab
* Place a radiology order for test "chest, 1 view (x-ray)"
* Click back button
* Click back button
* visit is closed at the front desk
* verify patient details on DCM4chee

## Doctor should be able to prescribe medicines and tests and get relevant reports
Tags: smoke,next
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Nurse opens clinical tab
* Enter vitals
* Doctor advises medicines "opd/prescriptionFlow/prescriptions" and tests "opd/prescriptionFlow/labTests"
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
* Nurse opens clinical tab with all section
* verify name with id
* verify OPD
* verify prescription
* verify vitals
* Doctor clicks consultation
* Doctor notes the diagnosis
* Save data
* Click back button
* Click back button
* visit is closed at the front desk
