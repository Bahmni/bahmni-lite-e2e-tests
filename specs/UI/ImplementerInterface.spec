# Implementer interface

tags: ui

## Admin should be able to create a form

tags: master-data-management

* Login to Bahmni location "General Ward" as a "receptionist"
* Open "Implementer interface" module
* Open Form builder
* Put formname "Formrandom"
* Edit form "Formrandom"
* Create obs "Height"

   |Property |
   |---------|
   |Mandatory|
   |AddMore  |
   |Abnormal |
* Create obs group "Heart"

## Admin should be able to create a form and validate on patient dashboard

tags: ui, hospital, regression

* Login to openMRS as user "admin"
* Goto Administration
* Delete the "Blood Pressure" from the openMRS if exist
* Login to Bahmni as a "admin"
* Open "Implementer interface" module
* Create a form with form name as "Blood Pressure"
* Create obs group "Blood Pressure"
* Save data
* Click Publish button
* Click back button
* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Open clinical tab
* Enter Form Values and validate no error is displayed on save "consultation/observations/bloodPressure"
* Click back button
* Goto All sections and search the newly created patient
* Validate obs "consultation/observations/bloodPressure" on the patient clinical dashboard
* Click on home page
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk
