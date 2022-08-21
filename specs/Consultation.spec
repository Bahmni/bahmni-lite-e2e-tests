#Consultation

## Doctor should be able to capture Consultation
* Login to Bahmni location "General Ward" as a "receptionist"
* Goto Clinical application
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Enter History and Examination details "program/historyAndExaminationDetails"
* Enter vitals "opConsultation/Vitals" 
* Doctor captures consultation notes "Consultation notes"
* Doctor notes the diagnosis and conditions "consultation/diagnosis/diagnosis_condition"
* Doctor prescribes medications "opd/prescriptionFlow/medication/paracetamol"
* Doctor prescribes tests "opd/prescriptionFlow/lab/Haemogram"
* Click back button
* Goto All sections and search the newly created patient
* Verify medical prescription in patient clinical dashboard
* Verify diagnosis and condition in patient clinical dashboard
* Validate the lab tests are available in patient clinical dashboard
* Verify diagnosis and condition in patient clinical dashboard
* Verify vitals
* Verify history & examination in patient clinical dashboard
* Verify consultation notes in patient clinical dashboard

