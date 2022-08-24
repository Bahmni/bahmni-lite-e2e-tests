# Laboratory and Billing

## Old Uploaded Patient data should be available for billing

tags: hospital, lab, payment, regression

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
* Enter vitals "consultation/observations/Vitals"
* Doctor advises medicines "consultation/medications/paracetamol" and tests "consultation/orders/Haemogram"
* Login to Open ELIS
* Collect Sample
* Enter blood Lab results
* click Send Anyway
* Validate lab result "details" in samples collected
* click Send Anyway
* Login to Odoo
* Convert Quotation to Sales
* Confirm Sales

## Doctor should be able to prescribe medicines and tests and get relevant reports

tags: hospital, lab, payment, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
* Doctor advises medicines "consultation/medications/paracetamol" and tests "consultation/orders/Haemogram"
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

tags: hospital, regression

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
