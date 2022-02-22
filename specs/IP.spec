# IPD Visits
|mobileNumber|
|+91-9876543210|
## Nurse should be able to admit and discharge a patient based on doctor's disposition
Tags: smoke
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates a patient with mobileNumber <mobileNumber> and starts an IPD visit
* Doctor issues an Admit disposition
* Click back button
* Click back button
* Nurse admits the patient to bed "304-c"
* Click back button
* Nurse opens clinical tab
* Enter vitals
* Doctor prescribes tests "opd/prescriptionFlow/labTests"
* Doctor prescribes medications "opd/prescriptionFlow/prescriptions"
* Doctor issues an Discharge disposition
* Click back button
* Click back button
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Click back button
* Nurse discharges the patient
___
* Goto Clinical application
* visit is closed at the front desk
