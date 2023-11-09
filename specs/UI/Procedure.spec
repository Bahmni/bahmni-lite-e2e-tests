# Procedure

## Admin should be able to upload and add procedure

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Create ValueSet for a procedure "consultation/procedure/valueSetHead"
* Procedure created is uploaded in Bahmni
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Open clinical tab
* Open "Orders" Tab
* Click on Procedure
* Add Procedure
* Open patient dashboard
* Verify Procedure on patient clinical dashboard
* Login to openMRS as user "admin"
* Goto Administration
* Goto Dictionary
* Search Body Site name
* Click on Procedure name
* Click on Edit
* Update the procedure name
* Save the concept
* Switch to "SNOMED" tab
* Doctor clicks consultation
* Open "Orders" Tab
* Click on Procedure
* Add Procedure
* Verify the updated procedure name
* Procedure created is uploaded in Bahmni
* Reload the page
* Click on Procedure
* Add Procedure
* Open patient dashboard
* Verify Procedure on patient clinical dashboard
* Switch to "openMRS" tab
* Remove the procedure from openMRS
* Switch to "SNOMED" tab
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Visit is closed at the front desk