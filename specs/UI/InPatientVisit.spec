# In Patient Visit

tags: ui

## Nurse should be able to admit and discharge a patient based on doctor's disposition

tags: depricated

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates a patient with mobileNumber "+91-9876543210" and starts an IPD visit
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor issues an Admit disposition
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Nurse admits the patient to available bed
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
* Doctor prescribes tests "consultation/orders/Haemogram"
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
* Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk

## Nurse uses Bed management to admit and discharge a patient based on doctor's disposition

tags: hospital, bedmanagement, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates a patient with mobileNumber "+91-9876543210" and starts an IPD visit
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor issues an Admit disposition
* Click back button
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Admit a patient to general ward bed
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
* Doctor prescribes tests "consultation/orders/Haemogram"
* Doctor prescribes medications "consultation/medications/paracetamol"
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
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
