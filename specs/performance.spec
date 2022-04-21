# OPD Visits

## Doctor should be able to prescribe medicines and tests and get relevant reports from LabLite
Tags: next
* Login to Bahmni location "General Ward" as a receptionist
* Receptionist creates the patient with mobile number "+91-9876543210" and starts an OPD
* Nurse opens clinical tab
* Enter vitals
* Open "Orders" Tab
* Doctor prescribe tests "opd/prescriptionFlow/lab/Haemogram"
* Save data
* Open "Medications" Tab
* Doctor prescribes medicines "opd/prescriptionFlow/medication/Alprazolam"
* Doctor prescribes medicines "opd/prescriptionFlow/medication/Caffeine"
* Doctor prescribes medicines "opd/prescriptionFlow/medication/Dextrose"
* Doctor prescribes medicines "opd/prescriptionFlow/medication/Gamma"
* Doctor prescribes medicines "opd/prescriptionFlow/medication/Haloperidol"
* Doctor prescribes medicines "opd/prescriptionFlow/medication/Neomycin"
* Doctor prescribes medicines "opd/prescriptionFlow/medication/paracetamol"
* Save data
* Goto Clinical application
* Nurse opens clinical tab with all section
* verify name with id
* verify OPD
* verify prescription "opd/prescriptionFlow/medication/Alprazolam"
* verify prescription "opd/prescriptionFlow/medication/Caffeine"
* verify prescription "opd/prescriptionFlow/medication/Dextrose"
* verify prescription "opd/prescriptionFlow/medication/Gamma"
* verify prescription "opd/prescriptionFlow/medication/Haloperidol"
* verify prescription "opd/prescriptionFlow/medication/Neomycin"
* verify prescription "opd/prescriptionFlow/medication/paracetamol"
* verify vitals
* Doctor clicks consultation
* Doctor notes the diagnosis
* Save data
* Click back button
* Click back button
* visit is closed at the front desk

