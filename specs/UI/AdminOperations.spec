# Admin operations

tags: ui

## Admin should be able to merge patients

tags: hospital, regression, cure

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient and starts an OPD
* Add this newly created patient as merge patient1
* Open clinical tab
* Enter History and Examination details "consultation/observations/historyAndExaminationDetails"
* Click back button
* Click back button
* visit is closed at the front desk
* Goto Clinical application
* Receptionist creates the patient and starts an OPD
* Add this newly created patient as merge patient2
* Open clinical tab
* Enter Orthopaedic followup "consultation/observations/OrthopaedicFollowup"
* Click back button
* Click back button
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* visit is closed at the front desk

## Create a report
* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Goto reporting
* Goto Report Administration
* Create Period Indicator Report
* Add Period Indicator Details

## A saleable concept should be available in OPENMRS

tags: hospital, payment, regression, cure

* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Admin adds a new drug concept
* Goto Clinical application
* Receptionist creates the patient and starts an OPD
* Open clinical tab
* Doctor prescribes medications "consultation/medications/paracetamol"

## Admin should be able to do the search index and Give OT Access to receptionist

tags: setup, cure

* Login to Bahmni as a "admin"
* Goto the openMRS Admin tab
* Do Search Index
* Goto Administration
* Give "OT: FullAccess" to "receptionist"
