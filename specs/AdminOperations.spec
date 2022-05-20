# Admin operations

## Admin should be able to merge patients

tags: hospital, clinic

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient1
* Open clinical tab
* Enter vitals
* Click back button
* Click back button
* visit is closed at the front desk
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient2
* Open clinical tab
* Enter vitals
* Click back button
* Click back button
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* visit is closed at the front desk
* Goto Clinical application
* Goto the openMRS Admin tab
* Goto Administration
* Merge the newly created patients
* Goto Clinical application
* Open "Registration" module
* Open patient2 details by search
* Verify patient1 details are open

## Create a report
* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Goto reporting
* Goto Report Administration
* Create Period Indicator Report
* Add Period Indicator Details

## A saleable concept should be available in ODOO

tags: openMRS

* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Admin adds a new drug concept
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Open clinical tab
* Doctor prescribes medications "opd/prescriptionFlow/medication/paracetamol"
* Goto Bahmni main home
* Login to Odoo
* Convert Quotation to Sales
* View Direct Sales Quotation
* Confirm Sales

## Admin should be able to import data as CSV
* Login to Bahmni location "General Ward" as a "receptionist"
* Open "Admin" module
* Open "CSV Upload"
* Upload "Patient" data file
* Click back button
* Click back button
* Open "Registration" module
* Select the newly created patient
* Verify new patient creation
* Click back button
* Open "Admin" module
* Open "CSV Upload"
* Upload "Encounter" data file
* Click back button
* Click back button
* Open clinical tab with all section
* Verfiy encounter upload
