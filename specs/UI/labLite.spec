# Lab Lite

tags: ui

## Doctor should be able to prescribe medicines and tests and get relevant reports from LabLite

tags: clinic, lab-lite, smoke, regression

* Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* Receptionist creates the patient and starts an OPD
* Logout and Login to Bahmni location "Bahmni Clinic" as a "doctor"
* Open clinical tab
* Doctor prescribes tests "consultation/orders/Platelets"
* Goto Clinical application
* Open "Lab entry" module
* Open a patient in lablite
* Verify the open orders in Lablite
* Upload and verify report in lablite for "consultation/orders/Platelets"
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

## Doctor should be able to prescribe tests and lab technician should be able to add test results for panel and test

tags: clinic, lab-lite, smoke, regression

* Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* Receptionist creates the patient and starts an OPD
* Logout and Login to Bahmni location "Bahmni Clinic" as a "doctor"
* Open clinical tab
* Doctor prescribes tests "consultation/orders/SicklingTest,consultation/orders/HIV"
* Goto Clinical application
* Open "Lab entry" module
* Open a patient in lablite
* Verify the open orders in Lablite
* Enter test result for "consultation/orders/SicklingTest"
* Enter test result for "consultation/orders/HIV"
* Click Home button on lab-lite
* Open clinical tab with all section
* Verify medical test in patient clinical dashboard
* Logout and Login to Bahmni location "Bahmni Clinic" as a "receptionist"
* visit is closed at the front desk

