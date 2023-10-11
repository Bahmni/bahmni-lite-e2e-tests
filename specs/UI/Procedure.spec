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
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Visit is closed at the front desk
* Login to openMRS as user "admin"
* Goto Administration
* Delete the procedure from openMRS
* Delete the procedure from snowstorm