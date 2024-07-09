# Odoo Automation Scenarios Readme

## Prerequisites

- It is assumed that in **Settings -> Bahmni**, all the custom settings are enabled:
  - Enable auto delivery on sale order confirm action
  - Sale Price Markup Rule
  - Enable auto invoice on sale order confirm action
  - Allocate quantity from multiple batches
  - Update price details of the product on Purchase Order Confirmation
  - Enable auto allocation of payments and credits to outstanding invoices
![alt text](readme_images/bahmni.png)

- In **Settings -> Invoice**, the Sale tax & Purchase tax should be set to 15%.
![alt text](readme_images/tax.png)

- In **Home -> Bahmni -> Bahmni Masters -> Sale price markup rule**, the markup percentage should be 10% for minimum cost 10 to maximum cost 100.
![alt text](readme_images/markup_rule.png)

## Automated Scenarios

### Odoo Purchase Flow

1. **End-to-End Flow of Odoo: Purchase, Sales, and Inventory Management without batch**
2. **End-to-End Flow of Odoo: Purchase, Sales, and Inventory Management with batch**

### Bahmni Odoo Sync

1. **Verify the newly created Lab Test is available in Odoo**
2. **Verify the newly created Lab Set is available in Odoo**
3. **Verify the newly created Radiology is available in Odoo**
4. **Verify the newly created Procedure is available in Odoo and salable as true**
5. **Verify the newly created Procedure is available in Odoo and salable as false**
6. **Verify the newly created Drug is available in Odoo**
7. **Verify the valid sale quotation is created when a Drug, Radiology, and Lab order is placed in Bahmni**
8. **Verify the sale quotation is appended with the Refill drug placed in Bahmni**
9. **Verify the new sale quotation is created for the existing customer for the Refill drug placed in Bahmni**
10. **Verify the blank quotation is created if the drug order is stopped in Bahmni**

### Tags and Execution

- All scenarios are tagged as 'Odoo' & 'Hospital'.
- Some tests are also tagged as 'regression'.

```
Tests tagged as regression
End-to-End Flow of Odoo: Purchase, Sales, and Inventory Management without batch
End-to-End Flow of Odoo: Purchase, Sales, and Inventory Management with batch
Verify the valid sale quotation is created when a Drug, radiology and lab order is placed in Bahmni
Verify the sale quotation appended with the Refill drug placed in Bahmni
```

To run all scenarios, use the command:
```
gauge run specs --env env_name --tags odoo -v
```

By default, in CI, only tests tagged as 'regression' will run with the command:
```
gauge run specs --env env_name --tags 'hospital & regression'
```