# Appointments

tags: ui

## A receptionist should be able to create and cancel regular appointment for a patient

tags: hospital, appointment, clinic, regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Receptionist creates a regular appointment "11am"
* Click back button
* Logout and Login to Bahmni as a "doctor"
* The doctor joins the link for the appointment
* Logout and Login to Bahmni as a "receptionist"
* Receptionist cancels the newly created "regular" appointment
* The patient's appointment should not be found
* Click back button
* visit is closed at the front desk
* Log out if still logged in

## A receptionist should be able to create and cancel recurring appointment for a patient

tags: hospital, appointment, clinic, regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Receptionist creates a recurring appointment for "2" days every "3" at time "10am"
* Logout and Login to Bahmni as a "doctor"
* Validate Appointment Details in Clinical Dashboard with status as "Scheduled"
* Logout and Login to Bahmni as a "receptionist"
* Receptionist cancels the newly created "recurring" appointment
* The patient's appointment should not be found
* Goto Clinical application
* Logout and Login to Bahmni as a "doctor"
* Validate Appointment Details in Clinical Dashboard with status as "Cancelled"
* Click back button
* visit is closed at the front desk
* Log out if still logged in

