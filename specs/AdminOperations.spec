# Admin operations

## Admin should be able to merge patients
Tags: smoke
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient1
* Nurse opens clinical tab
* Enter vitals
* Click back button
* Click back button
* visit is closed at the front desk
* close tab
* Open "Clinical Service" app
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Add this newly created patient as merge patient2
* Nurse opens clinical tab
* Enter vitals
* Click back button
* Click back button
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* visit is closed at the front desk
* close tab
* Open "Clinical Service" app
* Goto the openMRS Admin tab
* Merge the newly created patients
* Goto Clinical application
* Open registration module
* Open patient2 details by search
* Verify patient1 details are open
