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
* Admit a patient to general ward bed "304-d"
* Goto Bahmni home
* Nurse opens clinical tab
* Nurse enters basic clinical details
* Doctor starts ordering tests "opd/prescriptionFlow/labTests"
* Doctor starts prescribing medications "opd/prescriptionFlow/prescriptions"
* Doctor issues an Discharge disposition
* Goto Bahmni home
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Goto Bahmni home
* Open "InPatient" module
* Nurse at ADT gives discharge disposition
___
* visit is closed at the front desk
