# Operation Theatre

tags: hospital, regression, ui

## Verify the calendar and add notes

tags: OT, cure

* Login to Bahmni location "CURE Ethiopia" as a "receptionist"
* Open "Operation Theatre" module
* Verify the presence of calendar
* Add note verify the note
* Delete the note

## Create an OT location if it doesn't exisit

tags: hospital, master-data-management

* Login to Bahmni location "CURE Ethiopia" as a "receptionist"
* Goto the openMRS Admin tab
* Manage locations
* Create a location "OTLocation" if it doesn't exist

## Admin should be able to block OT for a surgeon's and schedule a time for a patient's operation

tags: OT

* Login to Bahmni location "CURE Ethiopia" as a "receptionist"
* Receptionist creates the "cure" patient
* OT team creates an OT Schedule
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
