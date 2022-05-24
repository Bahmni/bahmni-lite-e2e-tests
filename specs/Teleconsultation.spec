# Appointments

## A receptionist should be able to create and cancel teleconsultation appointment for a patient
Tags: regression
* Login to Bahmni location "General Ward" as a "receptionist"
* Open "Appointment scheduling" module
* Open admin tab of Appointments
* Create a service if it does not exist
* Goto Clinical application
* Goto the openMRS Admin tab
* Goto Administration
* Manage locations
* Create a location "appointmentLocation" if it doesn't exist
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210"
* Click back button
* Receptionist creates a teleconsultation appointment "11am"
* Click back button
* The doctor joins the link for the appointment
* Click back button
* Receptionist cancels the newly created appointment
* The patient's appointment should not be found
