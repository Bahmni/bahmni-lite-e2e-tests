# Gauge tests for Bahmni E2E tests

End to End tests for Bahmni.
<Todo> Add critical flows of OpenELIS, PACS and ODOO

# Pre-requisites
* [Node-js](https://nodejs.org/en/)
* [Gauge](https://docs.gauge.org/getting_started/installing-gauge.html?os=macos&language=javascript&ide=vscode)
* Install Taiko `npm install -g taiko`

# QA Test plan
* The details of scenarios covered and planned are given [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2813427741/QA+Automation+Testing)

# Execution
* npm install
* `gauge run --tags 'core' specs -v`
> `--tags` allows us to choose the tests to run from the test suite. 
    In this command we are running only the `Bahmni core product` tests from the test suite. 

> The HTML reports can be found in `./reports/html-report` after the run.
