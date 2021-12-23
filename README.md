# Gauge tests for Bahmni E2E tests

End to End tests for Bahmni.
<Todo> Add critical flows of OpenELIS, PACS and ODOO

# Pre-requisites
* [Node-js](https://nodejs.org/en/)
* [Gauge](https://docs.getgauge.io/installing.html)
* Install Taiko `npm install -g taiko`

# Execution
* npm install
* `gauge run --tags 'core' specs -v`
> `--tags` allows us to choose the tests to run from the test suite. 
    In this command we are running only the `Bahmni core product` tests from the test suite. 

> The HTML reports can be found in `./reports/html-report` after the run.
