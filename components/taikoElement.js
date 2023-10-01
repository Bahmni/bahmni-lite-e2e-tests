'use strict';
const {waitFor} =require('taiko');
const taikoInteraction = require('./taikoInteraction');
const asserTTimeOut=parseInt(process.env.asserTTimeOut)
const logHelper = require('../bahmni-e2e-common-flows/tests/util/logHelper');

async function isPresent(element)
{
    try{
    return await element.isVisible(500,asserTTimeOut)
    }
    catch(e){
        logHelper.info(element ,' is not present');
    }
}

async function isNotPresent(element)
{
    
    try{
    return !(await element.isVisible(500,asserTTimeOut))
    }
    catch(e){
        logHelper.info(element ,' is still present');
    }
}
async function isExists(element)
{
    var check;
    try{
        check= await element.exists(500,asserTTimeOut)
    }
    catch(e){
        logHelper.info(element ,' is not exists');
    }
    return check;
}

async function isNotExists(element)
{
    var check;
    try{

        check= !await element.exists(500,asserTTimeOut)
    }
    catch(e){
        logHelper.info(element ,' is exists');
    }
    return check;
}
async function waitToExists(element)
{
    try{
        await waitFor(async () => (await element.exists(500,asserTTimeOut)))
        }
        catch(e){
            logHelper.info(element ,' still not Exists');
        }
}
async function waitNotToExists(element)
{
    try{
    await waitFor(async () => !(await element.exists(500,asserTTimeOut)))
    }
    catch(e)
    {
        logHelper.info(element ,' still Exists');
    }
}
async function waitToPresent(element)
{
    try{
    var isFound = true;
    do {
        isFound = await element.isVisible(500, asserTTimeOut)
    } while (!isFound)
    }
    catch(e){
        logHelper.info(element ,' still not present');
    }
}
async function waitNotToPresent(element)
{
    try{
        var isFound = true;
        do {
            isFound = await element.isVisible(500, asserTTimeOut)
        } while (!isFound)
        }
        catch(e){
            logHelper.info(element ,' still present');
        }
}
async function elementDisabled(element)
{
    try
    {
    return await element.isDisabled()
    }
    catch(e)
    {
        logHelper.info(element ,' is not disabled');
    }
}

async function elementEnabled(element)
{
    try
    {
    return !(await element.isDisabled())
    }
    catch(e)
    {
        logHelper.info(element ,' is enabled');
    }
}

async function getText(element)
{
    try
    {
    return (await element.text())
    }
    catch(e)
    {
        logHelper.info(element ,' text not found');
    }
}
module.exports = {
    isPresent: isPresent,
    isNotPresent: isNotPresent,
    isExists:isExists,
    isNotExists:isNotExists,
    waitNotToExists:waitNotToExists,
    waitToExists:waitToExists,
    waitToPresent: waitToPresent,
    waitNotToPresent:waitNotToPresent,
    elementDisabled: elementDisabled,
    elementEnabled: elementEnabled,
    getText:getText
}