# Operation Theatre

tags: hospital, regression, ui

## Create an OT location if it doesn't exisit

tags: hospital, master-data-management

* Login to Bahmni location "General Ward" as a "receptionist"
* Goto the openMRS Admin tab
* Manage locations
* Create a location "OTLocation" if it doesn't exist
## Admin should be able to block OT for a surgeon's and schedule a time for a patient's operation
* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the patient with mobile number "+91-9876543210"
* Click back button
* OT team creates an OT Schedule
* Click back button
* Open "Operation Theatre" module
* Click OT Scheduling
* Goto operation day
* Click doctor's OT schedule
* Edit doctor's OT schedule
* Schedule a surgery for patient
* Cancel the surgery
* Give reason
* Confirm cancellation
* Save OT data
* Click OT Scheduling
* Click doctor's OT schedule
* Cancel surgeon's scheduled block
* Enter reason for surgical block cancellation
* Confirm cancellation
