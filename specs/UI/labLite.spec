# Lab Lite

tags: ui

## Doctor should be able to prescribe medicines and tests and get relevant reports from LabLite

tags: clinic, lab-lite, smoke, regression, cure

* Login to Bahmni location "CURE Ethiopia" as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Logout and Login to Bahmni location "CURE Ethiopia" as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Doctor prescribes lab test "consultation/orders/Platelets"
* Click on active patients list
* Click on home page
* Open "Orders" module
* Verify the lab order for "consultation/orders/Platelets"
* Logout and Login to Bahmni location "CURE Ethiopia" as a "receptionist"
* visit is closed at the front desk
* Log out if still logged in
