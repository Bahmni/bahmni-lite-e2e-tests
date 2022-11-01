# Appointments

## A receptionist should be able to create and cancel teleconsultation appointment for a patient

tags: hospital, appointment, clinic, regression_wip

* Login to Bahmni as a "receptionist"
* Receptionist creates the patient with mobile number "+919876543210" and starts an OPD
* Receptionist creates a teleconsultation appointment "11am"
* Click back button
* The doctor joins the link for the appointment
* Click back button
* Receptionist cancels the newly created appointment
* The patient's appointment should not be found
* Click back button
* visit is closed at the front desk

## A receptionist should be able to create and cancel walkin appointment for a patient

tags: hospital, appointment, clinic, regression

* Login to Bahmni as a "receptionist"
* Receptionist creates the patient with mobile number "+919876543210" and starts an OPD
* Receptionist creates a walkin appointment at "11am" for service
* Validate Appointment Details in Clinical Dashboard with status as "Scheduled"
* Receptionist cancels the newly created appointment
* The patient's appointment should not be found
* Click back button
* Validate Appointment Details in Clinical Dashboard with status as "Cancelled"
* Click back button
* visit is closed at the front desk
