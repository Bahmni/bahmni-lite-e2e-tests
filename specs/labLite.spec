# Lab Lite
## Doctor should be able to prescribe medicines and tests and get relevant reports from LabLite

tags: clinic, lab-lite, smoke, regression

* Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* Receptionist creates the patient with mobile number "+919876543210" without village
* Click Start OPD Visit
* Logout and Login to Bahmni location "Bahmni Clinic" as a "doctor"
* Open clinical tab
* Doctor prescribes tests "consultation/orders/Haemogram"
* Goto Clinical application
* Open "Lab entry" module
* Open a patient in lablite
* Verify the open orders in Lablite
* Upload and verify report in lablite
* Verify order is removed from Pending lab orders table
* Click Home button on lab-lite
* Navigate to Audit Log module
* Verify lab-lite audit events
* Goto Clinical application
* Open clinical tab with all section
* verify name with id
verify the document uploaded/Reports table is available in patient dashboard
* Logout and Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* visit is closed at the front desk
