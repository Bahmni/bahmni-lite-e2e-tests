# Procedure

## Admin should be able to upload and add procedure

tags: snomed, ui

* Login to Bahmni as a "receptionist" 
* Create new patient with random details and start an OPD visit
* Create ValueSet for a procedure "consultation/procedure/valueSetHead"
* Procedure created is uploaded in Bahmni
* Logout and Login to Bahmni as a "doctor"
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
* Verify the short name of the procedure setMember in openMRS
* Remove the procedure from openMRS
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk