# Radiology
## Doctor should be able to prescribe radiology tests

tags: hospital, radiology, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Open "Orders" Tab
* Place a radiology order for test "chest lateral"
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
* verify patient details on DCM4chee
