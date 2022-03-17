# Gauge tests for Bahmni E2E tests

![E2E tests result](https://github.com/Bahmni/bahmni-e2e-tests/actions/workflows/main.yml/badge.svg?branch=main)

This repo is for End to End tests for Bahmni.

# Pre-requisites
* [Node-js](https://nodejs.org/en/)
* [Gauge](https://docs.gauge.org/getting_started/installing-gauge.html?os=macos&language=javascript&ide=vscode)
* Install Taiko `npm install -g taiko`

# QA Test plan
* The details of scenarios covered and planned are given [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2813427741/QA+Automation+Testing)

# Execution
* npm install
* `gauge run specs --env qa08 -v -p --tags 'smoke | IPModule'`
> `--env` allows us to choose the environment on which the tests can run. These are the subfolders of the env folder with relevant property files.

> `-v` runs the tests in the verbose mode

> `--tags` allows us to choose the tests to run from the test suite. 
    In this command we are running the `smoke` tests and the tests for the `IPModule` from the test suite. 
    If we want to run the bed management module tests instead of IPModule, we can use the following command
    `gauge run specs --env qa08 -v -p --tags 'smoke | BedManagement'`
    
> The HTML reports can be found in `./reports/html-report` after the run.

## To run on local
* `gauge run specs --env local -v -p --tags 'smoke | IPModule'`
> This will run the test on the URL of the vagrant setup `https://192.168.33.10/`. 
If you want to change this you can edit the URLs in `bahmni.properties` in the `<test checkout Folder>/env/local` folder.
