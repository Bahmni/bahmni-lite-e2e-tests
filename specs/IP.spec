# IPD Visits
|mobileNumber|
|+91-9876543210|
## Should be able to get patient lab reports
Tags: smoke
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates a patient with mobileNumber <mobileNumber> and starts an IPD visit
* Doctor issues an Admit disposition
* Goto Clinical module
* Nurse admits the patient
* Goto Clinical module
* Nurse opens clinical tab
* Enter vitals
* Doctor prescribes tests "opd/prescriptionFlow/labTests"
* Doctor prescribes medications "opd/prescriptionFlow/prescriptions"
* Doctor issues an Discharge disposition
* Goto Clinical module
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Goto Clinical module
* Nurse discharges the patient
___
* visit is closed at the front desk
