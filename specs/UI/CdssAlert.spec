# Snomed CDSS Diagnosis-Drug Alert
## Doctor should be able to get contraindication critical alert for the diagnosis-drugs interaction

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Verify CDSS is enabled in openmrs in order to trigger contraindication alerts
* Random SNOMED diagnosis is identified using ECL query for descendants of "asthma"
* Doctor adds the random SNOMED descendant of "asthma" using "name" search
* Open "Medication" Tab
* Doctor adds a drug that has contraindication with the diagnosis "asthma"
* Doctor should be able to add drug after adding the mandatory details
* Verify alert message with card indicator "Critical" is displayed when drug is selected
* Verify the question icon is displayed in the alert message
* Doctor select the reason for dismissal
* Click on dismiss button
* Save data
* Open patient dashboard
* Verify medication on patient clinical dashboard
* Click back button
* Click back button
* Navigate to Audit Log module
* Verify dismissal entry is added in audit log
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* visit is closed at the front desk

## Doctor should be able to get contraindication warning alert for the diagnosis-drugs interaction

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Verify CDSS is enabled in openmrs in order to trigger contraindication alerts
* Random SNOMED diagnosis is identified using ECL query for descendants of "Disease of liver"
* Doctor adds the random SNOMED descendant of "Disease of liver" using "name" search
* Open "Medication" Tab
* Doctor adds a drug that has contraindication with the diagnosis "Disease of liver"
* Doctor should be able to add drug after adding the mandatory details
* Verify alert message with card indicator "Warning" is displayed when drug is selected
* Verify the question icon is displayed in the alert message
* Save data
* Open patient dashboard
* Verify medication on patient clinical dashboard
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* visit is closed at the front desk


## Doctor should be able to get contraindication Info alert for the drug-drug interaction

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Verify CDSS is enabled in openmrs in order to trigger contraindication alerts
* Open clinical tab
* Open "Medication" Tab
* Doctor add drugs which are contraindicative with each other
* Verify alert message with card indicator "Info" is displayed when two contraindicative drug is selected
* Verify the question icon is displayed in the alert message
* Save data
* Open patient dashboard
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* visit is closed at the front desk

## Doctor should be able to get high dosage alert for a drug added

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Verify CDSS is enabled in openmrs in order to trigger contraindication alerts
* Open clinical tab
* Open "Medication" Tab
* Doctor add a drug with high dosage "drug_dosage" alert
* Verify alert message with card indicator "Warning" is displayed when drug is selected
* Verify the question icon is displayed in the alert message
* Save data
* Open patient dashboard
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* visit is closed at the front desk