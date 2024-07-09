# Bahmni ODOO sync

tags: hospital, ODOO, ui

## Verify the newly created Lab Test is available in ODOO
* Create a concept of type "Text" with class "LabTest"
* Login to Odoo
* Navigate to Products page
* wait for "10000"
* Select List view in ODOO
* Enter the concept name in search box
* Click Search button
* Open product in search result
* Verify the value "Service" is displayed for the field "Product Type"
* Verify the value "All / Services / Lab / Test" is displayed for the field "Product Category"
* Verify the value "Unit(s)" is displayed for the field "Unit of Measure"
* Verify the value "Unit(s)" is displayed for the field "Purchase UoM"
* Verify the value of checkbox "Can be Purchased" is "unchecked"

## Verify the newly created Lab Set is available in ODOO
* Create a concept of type "Text" with class "LabSet"
* Login to Odoo
* Navigate to Products page
* wait for "10000"
* Select List view in ODOO
* Enter the concept name in search box
* Click Search button
* Open product in search result
* Verify the value "Service" is displayed for the field "Product Type"
* Verify the value "All / Services / Lab / Panel" is displayed for the field "Product Category"
* Verify the value "Unit(s)" is displayed for the field "Unit of Measure"
* Verify the value "Unit(s)" is displayed for the field "Purchase UoM"
* Verify the value of checkbox "Can be Purchased" is "unchecked"

## Verify the newly created Radiology is available in ODOO
* Create a concept of type "Text" with class "Radiology"
* Login to Odoo
* Navigate to Products page
* wait for "10000"
* Select List view in ODOO
* Enter the concept name in search box
* Click Search button
* Open product in search result
* Verify the value "Service" is displayed for the field "Product Type"
* Verify the value "All / Services / Radiology" is displayed for the field "Product Category"
* Verify the value "Unit(s)" is displayed for the field "Unit of Measure"
* Verify the value "Unit(s)" is displayed for the field "Purchase UoM"
* Verify the value of checkbox "Can be Purchased" is "unchecked"

## Verify the newly created Procedure is available in ODOO and salable as true
* Create a concept of type "Text" with class "Procedure" and salable as "true"
* Login to Odoo
* Navigate to Products page
* wait for "10000"
* Select List view in ODOO
* Enter the concept name in search box
* Click Search button
* Open product in search result
* Verify the value "Service" is displayed for the field "Product Type"
* Verify the value "All / Saleable / Others" is displayed for the field "Product Category"
* Verify the value "Unit(s)" is displayed for the field "Unit of Measure"
* Verify the value "Unit(s)" is displayed for the field "Purchase UoM"
* Verify the value of checkbox "Can be Sold" is "checked"
* Verify the value of checkbox "Can be Purchased" is "unchecked"

## Verify the newly created Procedure is available in ODOO and salable as false
* Create a concept of type "Text" with class "Procedure" and salable as "false"
* Login to Odoo
* Navigate to Products page
* wait for "10000"
* Select List view in ODOO
* Clear search Filters
* Enter the concept name in search box
* Click Search button
* Open product in search result
* Verify the value "Service" is displayed for the field "Product Type"
* Verify the value "All / Saleable / Others" is displayed for the field "Product Category"
* Verify the value "Unit(s)" is displayed for the field "Unit of Measure"
* Verify the value "Unit(s)" is displayed for the field "Purchase UoM"
* Verify the value of checkbox "Can be Sold" is "unchecked"
* Verify the value of checkbox "Can be Purchased" is "unchecked"

## Verify the newly created Drug is available in ODOO
* Create a drug
* Login to Odoo
* Navigate to Products page
* wait for "10000"
* Select List view in ODOO
* Clear search Filters
* Enter the concept name in search box
* Click Search button
* Open product in search result
* Verify the value "Storable Product" is displayed for the field "Product Type"
* Verify the value "All / Saleable / Drugs / Tablet" is displayed for the field "Product Category"
* Verify the value "Unit(s)" is displayed for the field "Unit of Measure"
* Verify the value "Unit(s)" is displayed for the field "Purchase UoM"
* Verify the value of checkbox "Can be Sold" is "checked"
* Verify the value of checkbox "Can be Purchased" is "checked"

## Verify the valid sale quotation is created when a Drug, radiology and lab order is placed in Bahmni

tags: regression

* Create a Patient and start visit through API
* Login to Bahmni as a "doctor"
* Open clinical tab
* Doctor prescribes medications "consultation/medications/paracetamol"
* Doctor prescribes tests "consultation/orders/Haemogram"
* Place a radiology order for test "chest lateral"
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Verify the value for the field Cutomer name
* Verify the value for the field Care Setting
* Verify the value for the field Provider Name
* Verify the value "Immediate Payment" is displayed for the field "Payment Terms"
* Verify the value "Pharmacy" is displayed for the field "Shop"
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "3"
* Verify the items Drug, lab order and radiology order in Quotation with expected quantity, price, description, taxes and sub total
* Update the Quantity & Unit price and validate the Sub Total
* Verify the quotation price details for a new customer
* Confirm sale
* Verify the Delivery quantity for Drug, lab order and radiology order in Quotation
* Check current status is set as "SALES ORDER"
* Click on View "Delivery" button on Odoo
* wait for "3000"
* Verify the delivery items
* Check current status is set as "DONE"
* Browser back
* Click on View "Invoices" button on Odoo
* wait for "3000"
* Verify the Invoice items
* Verify the invoice price details for a new customer

## Verify the sale quotation appended with the Refill drug placed in Bahmni

tags: regression

* Create a Patient and start visit through API
* Login to Bahmni as a "doctor"
* Open clinical tab
* Doctor prescribes medications "consultation/medications/paracetamol"
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Verify the value for the field Cutomer name
* Verify the value for the field Care Setting
* Verify the value for the field Provider Name
* Verify the value "Immediate Payment" is displayed for the field "Payment Terms"
* Verify the value "Pharmacy" is displayed for the field "Shop"
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "1"
* Verify the Drug order in Quotation with expected quantity, price, description, taxes and sub total
* Update the Quantity & Unit price and validate the Sub Total
* Verify the quotation price details for a new customer
* Goto Clinical application
* Open clinical tab
* Doctor Refills the medications
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "2"
* Verify the same product is added again in the same quotation

## Verify the new sale quotation is created for the existing customer for the Refill drug placed in Bahmni
* Create a Patient and start visit through API
* Login to Bahmni as a "doctor"
* Open clinical tab
* Doctor prescribes medications "consultation/medications/paracetamol"
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Verify the value for the field Cutomer name
* Verify the value for the field Care Setting
* Verify the value for the field Provider Name
* Verify the value "Immediate Payment" is displayed for the field "Payment Terms"
* Verify the value "Pharmacy" is displayed for the field "Shop"
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "1"
* Verify the Drug order in Quotation with expected quantity, price, description, taxes and sub total
* Update the Quantity & Unit price and validate the Sub Total
* Verify the quotation price details for a new customer
* Confirm sale
* Check current status is set as "SALES ORDER"
* Goto Clinical application
* Open clinical tab
* Doctor Refills the medications
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "1"
* Verify the Drug order in Quotation with expected quantity, price, description, taxes and sub total
* Verify the previous outstanding due for the existing customer
* Verify the untaxed amount, taxes, round off, Total & Total Outstanding Balance

## Verify the blank quotation is created if the drug order is stopped in Bahmni
* Create a Patient and start visit through API
* Login to Bahmni as a "doctor"
* Open clinical tab
* Doctor prescribes medications "consultation/medications/paracetamol"
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Verify the value for the field Cutomer name
* Verify the value for the field Care Setting
* Verify the value for the field Provider Name
* Verify the value "Immediate Payment" is displayed for the field "Payment Terms"
* Verify the value "Pharmacy" is displayed for the field "Shop"
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "1"
* Verify the Drug order in Quotation with expected quantity, price, description, taxes and sub total
* Update the Quantity & Unit price and validate the Sub Total
* Verify the quotation price details for a new customer
* Goto Clinical application
* Open clinical tab
* Doctor stops the medications
* Login to Odoo
* Convert Quotation to Sales
* wait for "20000"
* select Customer
* Check current status is set as "QUOTATION"
* Verify the no of items in Quotation is equal to "0"
