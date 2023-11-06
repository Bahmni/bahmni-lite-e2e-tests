# FHIR Export

## Admin should be able to export Patient data with Non-anonymisation and Anonymisation through API

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Random SNOMED diagnosis is identified using ECL query for descendants of "asthma"
* Doctor adds the random SNOMED descendant of "asthma" using "name" search
* Open "Medication" Tab
* Doctor add the drug for "Disease of liver"
* Doctor should be able to add drug after adding the mandatory details
* Save data
* Login to openMRS as user "admin"
* Goto Administration
* Create user and role to export Anonymised and Non-anonymised data
* Export Non-anonymised data
* Validate Non-anonymised fields from ndjson file export
* Configue global variable for "Redact" method
* Invoke endpoint for "anonymised" export
* Validate Anonymised fields from ndjson file export
* close tab
* close tab
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* visit is closed at the front desk


## Admin should be able to export Patient data with Non-anonymisation and Anonymisation through UI

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Random SNOMED diagnosis is identified using ECL query for descendants of "asthma"
* Doctor adds the random SNOMED descendant of "asthma" using "name" search
* Open "Medication" Tab
* Doctor add the drug for "Disease of liver"
* Doctor should be able to add drug after adding the mandatory details
* Save data
* Click back button
* Click back button
* Open "Admin" module
* Click on FHIR Export module
* Validate privilege to export data
* Logout and Login to Bahmni SNOMED location "General Ward" as a "plainExporter"
* Open "Admin" module
* Click on FHIR Export module
* Login to openMRS as user "admin"
* Goto Administration
* Create user and role to export Anonymised and Non-anonymised data
* close tab
* reload the page
* Select start date,end date and "Non-Anonymised" option to export data
* Download Zip file,rename it and extract the files present in it
* Validate Non-anonymised fields from ndjson file export
* Logout and Login to Bahmni SNOMED location "General Ward" as a "defaultExporter"
* Open "Admin" module
* Click on FHIR Export module
* Select start date,end date and "Anonymised" option to export data
* Download Zip file,rename it and extract the files present in it
* Validate Anonymised fields from ndjson file export
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* visit is closed at the front desk

