# Program Based Visits
|mobileNumber|
|+91-9876543210|
## Should be able to enter program level details for a patient
Tags: smoke
* Login to Bahmni location "OPD-1" as a receptionist
* Receptionist creates the patient with mobile number <mobileNumber> and starts an Special OPD
* Doctor enrolls Patient onto "HIV Program" stage "programStage" starting "5" years ago with treatment start "2" years ago, id "1234", dr incharge "doctor" and treatment stage "Initial Stage"
* Doctor clicks consultation
* Enter vitals
* Doctor captures the consultation notes "Consultation Notes" for newly created patient
* lab technician uploads patient document and radiology reports
___
* Click back button
* visit is closed at the front desk