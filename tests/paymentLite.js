const { goto, click, waitFor, button, write, into, textBox, below, scrollTo, above } = require("taiko");
var fileExtension = require("util/fileExtension")
step("Goto paymentlite", async function() {
	await goto(process.env.paymentLite)
});

step("Click Login", async function() {
	await click("Login",{waitForNavigation:true})
});

step("Open Customers", async function() {
	await click("Customers")
    await waitFor(async () => (await button("New Customer").exists()))
	await click(button("New Customer"))
	await waitFor("Basic Info")
});

step("Enter patient details in paymentLite", async function() {
	var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")
    var middleName = gauge.dataStore.scenarioStore.get("patientMiddleName")
    var lastName = gauge.dataStore.scenarioStore.get("patientLastName")

	await write(`${firstName} ${middleName} ${lastName}`,into(textBox(below("Display Name"))))
});

step("Select currency as <currency>", async function(currency) {
	await click(textBox(below("Primary Currency")))
	await scrollTo(currency)
	await click(currency)
});

step("Save customer", async function() {
	await click(button("Save customer",{waitForNavigation:true}))
});

step("Click Items", async function() {
	await click("Items")
    await waitFor(async () => (await button("Add Item").exists()))	
});

step("Add doctor with fees <fees>", async function (fees) {
	await click(button("Add Item"));
    await waitFor("New Item")	

	var doctorFirstName = gauge.dataStore.scenarioStore.get("doctorFirstName");
	var doctorMiddleName = gauge.dataStore.scenarioStore.get("doctorMiddleName");
	var doctorLastName = gauge.dataStore.scenarioStore.get("doctorLastName");

	await write(`${doctorFirstName} ${doctorMiddleName} ${doctorLastName}`,into(textBox(below("Name"))))
	await write(fees,into(textBox(below("Price"))))

	await click("Save Item")
});

step("Add a drug with price <price>", async function(price) {
	var prescriptionFile = gauge.dataStore.scenarioStore.get("prescriptions");
    var medicalPrescriptions = JSON.parse(fileExtension.parseContent(prescriptionFile))
	var drugName = medicalPrescriptions.drug_name;
	await click(button("Add Item"));

    await waitFor("New Item")	
	
	await write(drugName,into(textBox(below("Name"))))
	await write(price,into(textBox(below("Price"))))

	await click("Save Item")
});

step("Click Invoices", async function() {
	await click("Invoices")
    await waitFor(async () => (await button("New Invoice").exists()))
});

step("Create new customer", async function() {
	await waitFor("New Customer")
	await click("New Customer")
	var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")

	await scrollTo(firstName)
	await click(firstName)
});

step("Choose the doctor in paymentlite", async function() {
	await click(textBox(below("Items")))
	var doctorFirstName = gauge.dataStore.scenarioStore.get("doctorFirstName");
	await scrollTo(doctorFirstName)
	await click(doctorFirstName)
});


step("Add a new Item", async function() {
	await click("Add New Item")
});

step("Choose the prescibed medicines in paymentlite", async function() {
	await click(textBox(below("Items")))
	var prescriptionFile = gauge.dataStore.scenarioStore.get("prescriptions");
    var medicalPrescriptions = JSON.parse(fileExtension.parseContent(prescriptionFile))
	var drugName = medicalPrescriptions.drug_name;

	await scrollTo(drugName)
	await click(drugName)
});

step("Save Invoice", async function() {
	await click(button("Save Invoice"))
});

step("Click Payments", async function() {
	await click("payments")
    await waitFor(async () => (await button("Add Payment").exists()))
	await click("Add Payment")
	await waitFor("New Payment")
});

step("Enter patient name for payment", async function() {
	await click(textBox(above("Amount"), below("Customer")))

	var firstName = gauge.dataStore.scenarioStore.get("patientFirstName")

	await scrollTo(firstName)
	await click(firstName)
});

step("Enter amount <amount> the patient is willing to pay", async function (amount) {
		await write(amount,into(textBox(below("Amount"))))
});

step("Select the payment mode as <paymentMode>", async function(paymentMode) {
	await click(textBox(below("Payment Mode")))
	await click(paymentMode)
});

step("Create a new invoice", async function() {
	await click("New Invoice")
});