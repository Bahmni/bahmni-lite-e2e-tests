# Program Based Visits
## Enrol a patient under a program and proceed with consultation
Tags: hospital,lab
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an Special OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor enrolls Patient onto "HIV Program" stage "programStage" starting "5" years ago with treatment start "2" years ago, id "1234", dr incharge "doctor" and treatment stage "Initial Stage"
* Doctor clicks consultation
* wait for overlay to disappear
* Doctor captures the consultation notes "Consultation Notes" for newly created patient
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "labtechnician"
* lab technician uploads patient document and radiology reports
* Click back button
___
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk