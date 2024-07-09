# Snomed CDSS Diagnosis-Drug Alert

tags: ui

## Doctor should be able to get contraindication critical alert for the diagnosis-drugs interaction

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Random SNOMED diagnosis is identified using ECL query for descendants of "asthma"
* Open clinical tab
* Open "Diagnoses" Tab
* Doctor adds the random SNOMED descendant of "asthma" using "name" search
* Doctor prescribes a drug "consultation/medications/Propranolol" that is contraindicated for the patient's diagnosis
* Verify that a "Critical" alert message is displayed after the drug is added
* Verify the question icon with contraindication information link is displayed in the alert message
* Doctor select the reason for dismissal
* Click on dismiss button
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Click back button
* Click back button
* Navigate to Audit Log module
* Verify dismissal entry is added in audit log
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Doctor should be able to get contraindication warning alert for the diagnosis-drugs interaction

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Open clinical tab
* Open "Diagnoses" Tab
* Random SNOMED diagnosis is identified using ECL query for descendants of "hypokalemia"
* Doctor adds the random SNOMED descendant of "hypokalemia" using "name" search
* Random SNOMED diagnosis is identified using ECL query for descendants of "hyponatremia"
* Doctor adds the random SNOMED descendant of "hyponatremia" using "name" search
* Doctor prescribes a drug "consultation/medications/Acetazolamide" that is contraindicated for the patient's diagnosis
* Verify that a "Warning" alert message is displayed after the drug is added
* Verify the question icon with contraindication information link is displayed in the alert message
* Verify that the medication is striked off after it is dismissed
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Doctor should be able to get contraindication critical alert for the drug-drug interaction

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Open clinical tab
* Doctor add drugs "consultation/medications/Amoxicillin,consultation/medications/Amitriptyline" which are contraindicative with each other
* Verify alert message with card indicator "Critical" is displayed against added contraindicative drugs "Amoxicillin" and "Amitriptyline"
* Verify the question icon with contraindication information link is displayed in the alert message
* Doctor select the reason for dismissal
* Click on dismiss button
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Click back button
* Click back button
* Navigate to Audit Log module
* Verify dismissal entry is added in audit log
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Doctor should be able to get contraindication Info alert for the drug-drug interaction

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Open clinical tab
* Doctor add drugs "consultation/medications/Albendazole,consultation/medications/Amiodarone" which are contraindicative with each other
* Verify alert message with card indicator "Info" is displayed against added contraindicative drugs "Albendazole" and "Amiodarone"
* Verify the question icon with contraindication information link is displayed in the alert message
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Doctor should be able to get High Dosage Alert for a single drug having a single substance

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Open clinical tab
* Open "Medication" Tab
* Doctor add a drug with high dosage "consultation/medications/Ranitidine(injection)"
* Verify that a "Warning" alert message is displayed after the drug is added
* Verify the question icon with contraindication information link is displayed in the alert message
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Doctor should be able to get High Dosage Alert for multiple drugs having same substance

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Open clinical tab
* Open "Medication" Tab
* Doctor add a drug with high dosage "consultation/medications/Ranitidine(tablet)"
* Doctor add a drug with high dosage "consultation/medications/Ranitidine(injection)"
* Verify that a "Warning" alert message is displayed after the drug is added
* Verify the question icon with contraindication information link is displayed in the alert message
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk

## Doctor should be able to get High Dosage Alert for a single drug having multiple substances

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Verify CDSS is enabled in openMRS in order to trigger contraindication alerts
* Open clinical tab
* Open "Medication" Tab
* Doctor add a drug with high dosage "consultation/medications/Colchicine"
* Verify alert message with card indicator "Warning" is displayed against added contraindicative drugs "Probenecid" and "Colchicine"
* Verify the question icon with contraindication information link is displayed in the alert message
* Verify the dosage alert message is displayed for the substance "Probenecid"
* Verify the dosage alert message is displayed for the substance "Colchicine"
* Save data
* Open patient dashboard
* Verify medical prescription in patient clinical dashboard
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk
