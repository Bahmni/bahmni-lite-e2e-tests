# OPD Visits

## Doctor should be able to prescribe medicines and tests and get relevant reports
Tags: smoke
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
* View Direct Sales Quotation
* Confirm Sales
___
* Open "Clinical Service" app
* Nurse opens clinical tab with all section
* verify name with id
* verify OPD
* verify prescription
* verify vitals
* Click back button
* Click back button
* visit is closed at the front desk
