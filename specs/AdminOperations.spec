# Admin operations
|mobileNumber|
|+91-9876543210|

## Admin should be able to merge patients
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number <mobileNumber> and starts an OPD
* Add this newly created patient as merge patient1
* Nurse opens clinical tab
* Enter vitals
* visit is closed at the front desk
* Goto Bahmni main home
* Open "Clinical Service" app
* Receptionist creates the patient with mobile number <mobileNumber> and starts an OPD
* Add this newly created patient as merge patient2
* Nurse opens clinical tab
* Enter vitals
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Goto Clinical application
* Nurse discharges the patient
* visit is closed at the front desk
* Goto the openMRS Admin tab
* Merge the newly created patients
