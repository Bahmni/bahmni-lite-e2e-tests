# Snomed Diagnosis

## Doctor should be able to add Diagnosis and save which is coming from snomed ct server

tags: snomed, ui

* Login to Bahmni snomed location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni snomed location "General Ward" as a "doctor"
* Open clinical tab
* Open "Diagnoses" Tab
* Doctor adds random snomed diagnosis from the file "consultation/diagnosis/disease" which is not present in Openmrs Database using "name" search
* Verify random snomed "diagnosis name" saved is added to openmrs database with required metadata
* Open patient dashboard
* Verify diagnosis in patient clinical dashboard
* Doctor clicks consultation
* Open "Diagnoses" Tab
* Doctor adds random snomed diagnosis from the file "consultation/diagnosis/disease" which is not present in Openmrs Database using "code" search
* Verify random snomed "diagnosis code" saved is added to openmrs database with required metadata
* Open patient dashboard
* Verify diagnosis in patient clinical dashboard
* Click back button
* Click back button
* Logout and Login to Bahmni snomed location "General Ward" as a "receptionist"
* visit is closed at the front desk