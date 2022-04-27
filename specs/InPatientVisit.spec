# In Patient Visit
## Nurse should be able to admit and discharge a patient based on doctor's disposition
Tags: IPModule
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates a patient with mobileNumber "+91-9876543210" and starts an IPD visit
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor issues an Admit disposition
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Nurse admits the patient to bed "314-d"
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals
* Doctor prescribes tests "opd/prescriptionFlow/lab/Haemogram"
* Doctor issues an Discharge disposition
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "labtechnician"
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Nurse discharges the patient
* Click back button

## Nurse uses Bed management to admit and discharge a patient based on doctor's disposition
Tags: BedManagement
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates a patient with mobileNumber "+91-9876543210" and starts an IPD visit
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor issues an Admit disposition
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Admit a patient to general ward bed "304-d"
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals
* Doctor prescribes tests "opd/prescriptionFlow/lab/Haemogram"
* Doctor prescribes medications "opd/prescriptionFlow/medication/paracetamol"
* Doctor issues an Discharge disposition
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "labtechnician"
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Discharge the patient from allocated bed
* Click back button
___
* Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
