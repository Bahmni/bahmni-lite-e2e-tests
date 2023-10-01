# Appointments

tags: ui

## A receptionist should be able to create and cancel regular appointment for a patient

tags: hospital, appointment, clinic, regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Receptionist creates a regular appointment "11am"
* Receptionist creates a conflict regular appointment
* Logout and Login to Bahmni as a "doctor"
* The doctor joins the link for the appointment
* Logout and Login to Bahmni as a "receptionist"
* Receptionist cancels the newly created "regular" appointment
* Receptionist cancels the newly created "regular" appointment
* The patient's appointment should not be found
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
* Logout and Login to Bahmni as a "doctor"
* Validate Appointment Details in Clinical Dashboard with status as "Cancelled"
* visit is closed at the front desk
* Log out if still logged in

## A receptionist should be able to create and edit regular appointment for a patient

tags: hospital, appointment, clinic, regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Receptionist creates a regular appointment "11am"
* Logout and Login to Bahmni as a "doctor"
* The doctor joins the link for the appointment
* Logout and Login to Bahmni as a "receptionist"
* Receptionist edits the newly created "regular" appointment to "10 am"
* The patient's appointment should be edited to "10 am"
* visit is closed at the front desk
* Log out if still logged in

## A receptionist should be able to create waitist appointment for a patient

tags: hospital, appointment, clinic, regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Receptionist creates a waitlist appointment
* Logout and Login to Bahmni as a "receptionist"
* Receptionist cancels the newly created waitlist appointment
* The patient's appointment should not be found in the waitlist
* visit is closed at the front desk
* Log out if still logged in
