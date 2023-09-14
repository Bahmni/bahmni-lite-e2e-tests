# SNOMED Diagnosis Line Report with ICD-10 Code

## Doctor should be able to validate Line report with ICD-10 code

tags: snomed, ui

* Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Create new patient with random details and start an OPD visit
* Logout and Login to Bahmni SNOMED location "General Ward" as a "doctor"
* Doctor add diagnosis "SARS-CoV-2 breakthrough infection" with "mutiple mapGroup"
* Save data
* Goto ICD Mappings Demonstrator and get the ICD-10 codes for the "SARS-CoV-2 breakthrough infection"
* Click back button
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "SNOMED Diagnosis Line Report(ICD) for COVID-19" and click on run button
* Validate the SNOMED diagnosis line report for COVID-19 with ICD-10 code
* Click back button
* Doctor add diagnosis "Bronchitis" with "mapRule with age condition"
* Save data
* Goto ICD Mappings Demonstrator and get the ICD-10 codes for the "Bronchitis"
* Click back button
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "SNOMED Diagnosis Line Report(ICD) for Bronchitis" and click on run button
* Validate the SNOMED diagnosis line report for Bronchitis with ICD-10 code
* Click back button
* Doctor add diagnosis "Pelvic peritonitis" with "mapRule with gender condition"
* Save data
* Goto ICD Mappings Demonstrator and get the ICD-10 codes for the "Pelvic peritonitis"
* Click back button
* Click back button
* Open "Reports" module
* Select start date, end date and "HTML" format for "SNOMED Diagnosis Line Report(ICD) for Peritonitis" and click on run button
* Validate the SNOMED diagnosis line report for Peritonitis with ICD-10 code
* Click on home page
* Logout and Login to Bahmni SNOMED location "General Ward" as a "receptionist"
* Visit is closed at the front desk