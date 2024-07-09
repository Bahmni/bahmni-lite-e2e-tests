# Program Based Visits
## Enrol a patient under a program and proceed with consultation

tags: hospital, program, regression, ui

* Login to Bahmni location "General Ward" as a "receptionist"
* Open "Appointment scheduling" module
* Open admin tab of Appointments
* Create a service if it does not exist
* Goto Clinical application
* Goto the openMRS Admin tab
* Manage locations
* Create a location "appointmentLocation" if it doesn't exist
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an Special OPD
* Receptionist creates a recurring appointment for days "2" at time "12pm"
* Click back button
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
* Receptionist cancels all the appointments
* The patient's appointment should not be found in next week
* Click back button
* visit is closed at the front desk
