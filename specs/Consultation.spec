# Consultation

tags: clinic, consultation, regression

## Doctor should be able to capture Consultation
* Login to Bahmni as a "receptionist"
* Goto Clinical application
* Receptionist creates the patient with mobile number "+919876543210" and starts an OPD
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Enter History and Examination details "consultation/observations/historyAndExaminationDetails"
* Enter vitals "consultation/observations/Vitals"
* Doctor captures consultation notes "Consultation notes"
* Doctor notes the diagnosis and conditions "consultation/diagnosis/diagnosis_condition"
* Doctor prescribes medications "consultation/medications/paracetamol"
* Doctor prescribes tests "consultation/orders/Haemogram"
* Click back button
* Goto All sections and search the newly created patient
* Verify medical prescription in patient clinical dashboard
* Verify diagnosis and condition in patient clinical dashboard
* Validate the lab tests are available in patient clinical dashboard
* Verify diagnosis and condition in patient clinical dashboard
* Verify vitals
* Verify history & examination in patient clinical dashboard
* Verify consultation notes in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
