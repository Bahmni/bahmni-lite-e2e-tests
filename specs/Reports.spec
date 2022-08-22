# Reports Validation

## Validate the Visit reports

* Login to Bahmni as a "receptionist"
* Goto Clinical application
* Receptionist creates the patient with mobile number "+919876543210" and starts an OPD
* Logout and Login to Bahmni as a "doctor"
* Open clinical tab
* Doctor prescribes medications "opd/prescriptionFlow/medication/paracetamol"
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "Visit Report" and click on run button
* Validate the report generated.