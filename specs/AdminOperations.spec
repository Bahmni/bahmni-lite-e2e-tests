# Admin operations

## Admin should be able to merge patients
Tags: smoke
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient1
* Nurse opens clinical tab
* Enter vitals
* Click back button
* Click back button
* visit is closed at the front desk
* close tab
* Open "Clinical Service" app
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient2
* Nurse opens clinical tab
* Enter vitals
* Click back button
* Click back button
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* visit is closed at the front desk
* close tab
* Open "Clinical Service" app
* Goto the openMRS Admin tab
* Goto Administration
* Merge the newly created patients
* Goto Clinical application
* Open registration module
* Open patient2 details by search
* Verify patient1 details are open

## A saleable concept should be available in ODOO
Tags:openMRS
* Login to Bahmni location "General Ward" as a receptionist
* Goto the openMRS Admin tab
* Admin adds a new drug concept
* close tab
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Nurse opens clinical tab
* Doctor advises medicines "opd/prescriptionFlow/prescriptions" and tests "opd/prescriptionFlow/labTests"
* Goto Bahmni main home
* Login to Odoo
* View Direct Sales Quotation
* Confirm Sales
