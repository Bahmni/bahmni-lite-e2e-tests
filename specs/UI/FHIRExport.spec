# FHIR Export

## Admin should be able to export anonymised and non-anonymised Patient data through API

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Random SNOMED diagnosis is identified using ECL query for descendants of "asthma"
* Open clinical tab
* Open "Diagnoses" Tab
* Doctor adds the random SNOMED descendant of "asthma" using "name" search
* Open "Medication" Tab
* Doctor prescribes medicines "consultation/medications/Atorvastatin"
* Save data
* Login to openMRS as user "admin"
* Goto Administration
* Create user and role to export Anonymised and Non-anonymised data
* Export "non-anonymised" data
* Validate Non-anonymised fields from ndjson file export
* Validate global property for anonymised config
* Export "anonymised" data
* Validate Anonymised fields from ndjson file export
* Close tab
* Close tab
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Admin should be able to export anonymised and non-anonymised Patient data through UI

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Random SNOMED diagnosis is identified using ECL query for descendants of "asthma"
* Open clinical tab
* Open "Diagnoses" Tab
* Doctor adds the random SNOMED descendant of "asthma" using "name" search
* Open "Medication" Tab
* Doctor prescribes medicines "consultation/medications/Atorvastatin"
* Save data
* Click back button
* Click back button
* Open "Admin" module
* Click on FHIR Export module
* Validate privilege to export FHIR data with "doctor" credentials
* Login to openMRS as user "admin"
* Goto Administration
* Create user and role to export Anonymised and Non-anonymised data
* Close tab
* Logout and Login to Bahmni as a "plainExporter"
* Open "Admin" module
* Click on FHIR Export module
* Validate privilege to export FHIR data with "plainExporter" credentials
* Select start date, end date and "non-anonymised" option to export data
* Download and extract zip file
* Validate Non-anonymised fields from ndjson file export
* Logout and Login to Bahmni as a "defaultExporter"
* Open "Admin" module
* Click on FHIR Export module
* Validate privilege to export FHIR data with "defaultExporter" credentials
* Select start date, end date and "anonymised" option to export data
* Download and extract zip file
* Validate Anonymised fields from ndjson file export
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

