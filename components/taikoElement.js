'use strict';
const {waitFor} =require('taiko');
const taikoInteraction = require('./taikoInteraction');
const asserTTimeOut=parseInt(process.env.asserTTimeOut)


async function isPresent(element)
{
    try{
    return await element.isVisible(500,asserTTimeOut)
    }
    catch(e){
        console.log(element + ' is not present');
    }
}

async function isNotPresent(element)
{
    try{
    return !(await element.isVisible(500,asserTTimeOut))
    }
    catch(e){
        console.log(element + ' is still present');
    }
}
async function isExists(element)
{
    try{
    return await element.exists(500,asserTTimeOut)
    }
    catch(e){
        console.log(element + ' is not exists');
    }
}

async function isNotExists(element)
{
    try{
    return !await element.exists(500,asserTTimeOut)
    }
    catch(e){
        console.log(element + ' is not exists');
    }
}
async function waitToExists(element)
{
    try{
        await waitFor(async () => (await element.exists(500,asserTTimeOut)))
        }
        catch(e){
            console.log(element + ' still not Exists');
        }
}
async function waitNotToExists(element)
{
    try{
    await waitFor(async () => !(await element.exists(500,asserTTimeOut)))
    }
    catch(e)
    {
        console.log(element + ' still Exists');
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
        console.log(element + ' still not present');
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
            console.log(element + ' still not present');
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
        console.log(element +' of type '+type+' is not disabled');
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
        console.log(element +' of type '+type+' is enabled');
    }
}
module.exports = {
    isPresent: isPresent,
    isNotPresent: isNotPresent,
    isExists:isExists,
    waitNotToExists:waitNotToExists,
    waitToExists:waitToExists,
    waitToPresent: waitToPresent,
    waitNotToPresent:waitNotToPresent,
    elementDisabled: elementDisabled,
    elementEnabled: elementEnabled
}