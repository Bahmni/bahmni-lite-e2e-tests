# IPD Visits
|mobileNumber|
|+91-9876543210|
## Should be able to get patient lab reports
Tags: core
* Login to Bahmni location "General Ward" as a receptionist
* Open registration module
* Create a new patient with gender "Female" with random name, aged "29" with mobile number <mobileNumber>
* Start an IPD Visit
* Doctor issues an Admit disposition
* Goto Bahmni home
* Nurse admits the patient
* Goto Bahmni home
* Nurse opens clinical tab
* Nurse enters basic clinical details
* Doctor prescribes tests "opd/prescriptionFlow/labTests"
* Doctor prescribes medications "opd/prescriptionFlow/prescriptions"
* Doctor issues an Discharge disposition
* Goto Bahmni home
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Goto Bahmni home
* Nurse discharges the patient
___
* visit is closed at the front desk
