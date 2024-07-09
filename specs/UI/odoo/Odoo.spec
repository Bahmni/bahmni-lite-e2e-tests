# ODOO Purchase Flow
tags: hospital, regression, ODOO, ui

## End-to-End Flow of Odoo: Purchase, Sales, and Inventory Management without batch
* Login to Odoo
* Navigate to Products page
* wait for "5000"
* Select List view in ODOO
* Note the current product count in products page
* Navigate to Purchase page
* wait for "1000"
* Click "New" button
* Enter company name in create vendor page
* Click save button odoo
* Click "Orders" from Odoo top menu and select "Requests for Quotation" from dropdown
* Click "New" button
* Enter company name in Requests for Quotation page
* Add products in Requests for Quotation page
* Validate the price details in request for quotations page
* Confirm purchase Order
* wait for "3000"
* Check current status is set as "PURCHASE ORDER"
* Receive the products
* Navigate to Products page
* wait for "5000"
* Select List view in ODOO
* Validate current product count in products page after receiving the products and verify the new sales price, cost price & MRP are set
* Click Odoo Home button
* Click Sales
* Click "Orders" from Odoo top menu and select "Customers" from dropdown
* Click "New" button
* Select "Individual" in customer type radio button
* Enter customer name in create customer page
* Click save button odoo
* Click "Orders" from Odoo top menu and select "Quotations" from dropdown
* Click "New" button
* Enter customer name in Quotation page
* Select shop as "Pharmacy" in Quotation page
* Add products in Sale Quotation page
* Verify the quotation price details for a new customer
* Click "CONFIRM" button
* Click on View "Invoices" button on Odoo
* Check current status is set as "POSTED"
* Click "REGISTER PAYMENT" button
* Click "CREATE PAYMENT" button
* Wait for "PAID" text to exists
* Navigate to Products page
* wait for "5000"
* Select List view in ODOO
* Validate current product count in products page after selling the products

## End-to-End Flow of Odoo: Purchase, Sales, and Inventory Management with batch
* Login to Odoo
* Navigate to Products page
* Click "New" button
* Create a storable product which is managed by Lots
* Navigate to Purchase page
* wait for "1000"
* Click "New" button
* Enter company name in create vendor page
* Click save button odoo
* Click "Orders" from Odoo top menu and select "Requests for Quotation" from dropdown
* Click "New" button
* Enter company name in Requests for Quotation page
* Add products in Requests for Quotation page
* Confirm purchase Order
* wait for "3000"
* Receive the products in lots
* Navigate to Products page
* wait for "5000"
* Select List view in ODOO
* Validate current product count in products page after receiving the products and verify the new sales price, cost price & MRP are set, also the lot serial numbers
* Click Odoo Home button
* Click Sales
* Click "Orders" from Odoo top menu and select "Customers" from dropdown
* Click "New" button
* Select "Individual" in customer type radio button
* Enter customer name in create customer page
* Click save button odoo
* Click "Orders" from Odoo top menu and select "Quotations" from dropdown
* Click "New" button
* Enter customer name in Quotation page
* Select shop as "Pharmacy" in Quotation page
* Add products in Sale Quotation page managed by lots and verify the earliest expiry batch is auto selected
* Verify the quotation price details for a new customer
* Confirm sale
* Check current status is set as "SALES ORDER"
* Navigate to Products page
* wait for "5000"
* Select List view in ODOO
* Validate current product count in products page after selling the products which is managed by lot, also the lot serial numbers