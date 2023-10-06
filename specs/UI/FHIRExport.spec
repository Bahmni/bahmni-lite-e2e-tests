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
* Export Anonymised data using "Redact" method
* Validate "Redacted" fields from ndjson output
* Export Anonymised data using "Random" method
* Validate "Randomized" fields from ndjson output
* Export Anonymised data using "Correlate" method
* Validate "Correlated" fields from ndjson output

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
