# Appointments

## Create a service if it doesn't exist
Tags: smoke
* Login to Bahmni location "General Ward" as a "receptionist"
* Open "Appointment scheduling" module
* Open admin tab of Appointments
* Create a service if it does not exist

## Create an appointment location if it doesn't exisit
Tags: smoke
* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Goto Administration
* Manage locations
* Create an appointment location if it doesn't exist

## A receptionist should be able to create a walkin appointment for a patient
Tags: regression
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210"
* Click back button
* Receptionist creates a walkin appointment at "10am" for service
* Receptionist cancels the newly created appointment
* The patient's appointment should not be found

## A receptionist should be able to create and cancel recurring appointment for a patient
Tags: smoke
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210"
* Click back button
* Receptionist creates a recurring appointment for days "2" at time "12pm"
* Receptionist cancels all the appointments
* The patient's appointment should not be found in next week

## A receptionist should be able to create and cancel teleconsultation appointment for a patient
Tags: regression
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210"
* Click back button
* Receptionist creates a teleconsultation appointment "11am"
* Click back button
* The doctor joins the link for the appointment
* Click back button
* Receptionist cancels the newly created appointment
* The patient's appointment should not be found
