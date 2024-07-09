# Consultation

tags: clinic, consultation, regression, hospital, ui

## Doctor should be able to capture Consultation
* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Open clinical tab
* Enter History and Examination details "consultation/observations/historyAndExaminationDetails"
* Enter vitals "consultation/observations/Vitals"
* Doctor captures consultation notes "Consultation notes"
* Doctor notes the diagnosis and conditions "consultation/diagnosis/diagnosis_condition"
* Doctor prescribes medications "consultation/medications/paracetamol"
* Doctor prescribes tests "consultation/orders/Haemogram"
* Place a radiology order for test "chest lateral"
* Collect sample in Bacteriology
* Click back button
* Goto All sections and search the newly created patient
* Verify bacteriology details
* Verify Radiology order for test "chest lateral" in patient clinical dashboard
* Verify Radiology order for test "chest lateral" under pacs display control in patient clinical dashboard
* Verify history & examination in patient clinical dashboard
* Validate the lab tests are available in patient clinical dashboard
* Verify medical prescription in patient clinical dashboard
* Verify diagnosis and condition in patient clinical dashboard
* Validate obs "consultation/observations/Vitals" on the patient clinical dashboard
* Verify consultation notes in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk
