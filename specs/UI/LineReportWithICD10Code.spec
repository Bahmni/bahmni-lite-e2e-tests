# SNOMED Diagnosis Line Report with ICD-10 Code

tags: ui

## Doctor should be able to validate Line report with ICD-10 code

tags: snomed, ui

* Login to Bahmni as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni as a "doctor"
* Doctor add diagnosis "SARS-CoV-2 breakthrough infection"
* Save data
* Navigate to the ICD Mappings Demonstrator and retrieve the ICD-10 codes for "SARS-CoV-2 breakthrough infection" using the mapRule associated with the "mutiple mapGroup" condition
* Click back button
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "SNOMED Diagnosis Line Report(ICD) for COVID-19" and click on run button
* Validate the SNOMED diagnosis line report for COVID-19 with ICD-10 code
* Click back button
* Doctor add diagnosis "Bronchitis"
* Save data
* Navigate to the ICD Mappings Demonstrator and retrieve the ICD-10 codes for "Bronchitis" using the mapRule associated with the "age" condition
* Click back button
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "SNOMED Diagnosis Line Report(ICD) for Bronchitis" and click on run button
* Validate the SNOMED diagnosis line report for Bronchitis with ICD-10 code
* Click back button
* Doctor add diagnosis "Pelvic peritonitis"
* Save data
* Navigate to the ICD Mappings Demonstrator and retrieve the ICD-10 codes for "Pelvic peritonitis" using the mapRule associated with the "gender" condition
* Click back button
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "SNOMED Diagnosis Line Report(ICD) for Peritonitis" and click on run button
* Validate the SNOMED diagnosis line report for Peritonitis with ICD-10 code
* Click on home page
* Logout and Login to Bahmni as a "receptionist"
* Visit is closed at the front desk
