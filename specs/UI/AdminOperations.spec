# Admin operations

tags: ui

## Admin should be able to merge patients

tags: hospital, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient1
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
* Click back button
* Click back button
* visit is closed at the front desk
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient2
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
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

tags: hospital, payment, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Admin adds a new drug concept
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Open clinical tab
* Doctor prescribes medications "consultation/medications/paracetamol"
* Goto Bahmni main home
* Login to Odoo
* Convert Quotation to Sales
* Confirm Sales

## Admin should be able to do the search index and Give OT Access to receptionist

tags: setup

* Login to Bahmni as a "admin"
* Goto the openMRS Admin tab
* Do Search Index
* Goto Administration
* Give "OT: FullAccess" to "receptionist"
