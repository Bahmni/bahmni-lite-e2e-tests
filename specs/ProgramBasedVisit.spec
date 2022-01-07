# Program Based Visits
|mobileNumber|
|+91-9876543210|
## Should be able to enter program level details for a patient
Tags: core
* Login to Bahmni location "OPD-1" as a receptionist
* Receptionist creates the patient with mobile number <mobileNumber> and starts an Special OPD
* Receptionist creates a new appointment at "9:00" for service "Cardiology"
* Go back to home page
* Doctor enrolls Patient onto "HIV Program" stage "programStage" starting "5" years ago with treatment start "2" years ago, id "1234", dr incharge "doctor" and treatment stage "Initial Stage"
* Doctor clicks consultation
* Nurse enters basic clinical details
* Doctor captures the consultation notes "Consultation Notes" for newly created patient
* lab technician uploads patient document and radiology reports
* Goto Bahmni home
* Receptionist cancels the appointment
___
* visit is closed at the front desk