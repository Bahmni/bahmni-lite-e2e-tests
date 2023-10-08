# Consultation

tags: clinic, consultation, regression, ui


## Doctor should be able to see the specialities tab

tags: cure

* Login to Bahmni as a "doctor"
* Open "Clinical" module
* Verify the specialitis list
* Click on home page
* Log out if still logged in

## Doctor should be able to see the patient in My Patient queue and speciality tab

tags: cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Receptionist creates a regular appointment "11am" on same day for provider "Test Doctor" for speciality "ENT" for service "New Assessment - ENT"
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" app
* Verify the patient visit is added in my patient queue and the "ENT" queue
* Click on home page
* Receptionist cancels the newly created "regular" appointment
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
* Log out if still logged in

## Doctor should be able to capture Consultation

tags: cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Enter Form Values and validate no error is displayed on save "consultation/observations/OrthopaedicHistoryPhysical"
* Doctor notes the diagnosis and conditions "consultation/diagnosis/diagnosis_condition"
* Doctor prescribes medications "consultation/medications/paracetamol,consultation/medications/Morphine,consultation/medications/Diazepam,consultation/medications/Ceftriaxone"
* Doctor prescribes radiology test "consultation/orders/CTscan"
* Doctor prescribes lab test "consultation/orders/Platelets"
* Click on active patients list
* Verify the patient is consulted
* Click on home page
* Verify the radiology order for "consultation/orders/CTscan"
* Verify the lab order for "consultation/orders/Platelets"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Verify medical prescription in patient clinical dashboard
* Verify diagnosis and condition in patient clinical dashboard
* Validate the lab tests are available in patient clinical dashboard
* Click on active patients list
* Click on home page
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
* Log out if still logged in

## Doctor should be able to add Observation Form

tags: forms, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Enter Form Values and validate no error is displayed on save "consultation/observations/physicalTherapy"
* Enter Form Values and validate no error is displayed on save "consultation/observations/preAnaesthesiaAssessment"
* Enter Form Values and validate no error is displayed on save "consultation/observations/paediatricAssessment"
* Enter Form Values and validate no error is displayed on save "consultation/observations/patientProgressNotesOrders"
* Enter Form Values and validate no error is displayed on save "consultation/observations/vitals"
* Enter Form Values and validate no error is displayed on save "consultation/observations/rehabReferral"
* Enter Form Values and validate no error is displayed on save "consultation/observations/rehabAssessment"
//* Enter Form Values and validate no error is displayed on save "consultation/observations/admissionOrder"
* Enter Form Values and validate no error is displayed on save "consultation/observations/orthopaedicOperativeReport"
* Goto patient clinical dashboard
* Validate obs "consultation/observations/physicalTherapy" on the patient clinical dashboard
* Validate new obs "consultation/observations/preAnaesthesiaAssessment" on the patient clinical dashboard
* Validate new obs "consultation/observations/patientProgressNotesOrders" on the patient clinical dashboard
* Validate new obs "consultation/observations/vitals" on the patient clinical dashboard
//* Validate new obs "consultation/observations/admissionOrder" on the patient clinical dashboard
* Validate new obs "consultation/observations/paediatricAssessment" on the patient clinical dashboard
* Validate new obs "consultation/observations/rehabReferral" on the patient clinical dashboard
* Validate new obs "consultation/observations/rehabAssessment" on the patient clinical dashboard
* Validate new obs "consultation/observations/orthopaedicOperativeReport" on the patient clinical dashboard
* Click on active patients list
* Click on home page
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
* Log out if still logged in

## Doctor should be able to add and edit IPD medications

tags: cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Doctor prescribes medications "consultation/medications/paracetamol,consultation/medications/Diazepam"
* Goto patient clinical dashboard
* Verify medical prescription in patient clinical dashboard
* Doctor clicks consultation
* Doctor updates "consultation/medications/paracetamol,consultation/medications/Diazepam" as non ipd drug
* Goto patient clinical dashboard
* Verify medical prescription is updated as non ipd for "consultation/medications/paracetamol,consultation/medications/Diazepam"
* Click on active patients list
* Click on home page
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
* Log out if still logged in
