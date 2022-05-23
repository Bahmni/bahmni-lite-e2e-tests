const { button, toRightOf, textBox, into, write,press, click, timeField,below,scrollTo,text,evaluate,$, checkBox,waitFor,image,within } = require('taiko');
var date = require("./date");
var assert = require("assert")

async function repeatUntilEnabled(element){
    var isDisabled = true;
    do {
        isDisabled = await element.isDisabled()
        waitFor(1000)
    }while (!isDisabled) 
}

async function repeatUntilFound(element){
    var isFound = false;
    do {
        isFound = await element.exists()
        waitFor(1000)
    }while (!isFound) 
}

async function repeatUntilNotVisible(element){
    var isFound = true;
    do {
        try
        {
            isFound = await element.isVisible()
            waitFor(1000)
        }
        catch(e){isFound = false;}
    }while (isFound) 
}

async function verifyConfigurations(configurations,observationFormName){
    for(var configuration of configurations){
        switch(configuration.type) {
            case 'Group':
                await verifyConfigurations(configuration.value,observationFormName)
              break;
            default:
                if(configuration.label!="Date of Sample Collection")
                    assert.ok(await text(configuration.value,toRightOf(configuration.label)).exists())
                break;
          }            
    }
}

function getDate(dateValue){
    if(dateValue=='Today')
        return date.today();
    else
    {
        dateLessThan = dateValue.split("-");
        if(dateLessThan.length>1)
        {
            return date.getDateAgo(dateLessThan[1]);
        }
    }
    throw "Unexpected date"
}

async function selectEntriesTillIterationEnds(entrySequence){
       var patientIdentifierValue = gauge.dataStore.scenarioStore.get("patientIdentifier"+(entrySequence));
       await write(patientIdentifierValue)
       await press('Enter', {waitForNavigation:true,navigationTimeout:process.env.actionTimeout});
       await repeatUntilNotVisible($("#overlay"));
}


async function executeConfigurations(configurations,observationFormName,isNotObsForm){
    for(var configuration of configurations){
        switch(configuration.type) {
            case 'Group':
                await executeConfigurations(configuration.value,observationFormName,isNotObsForm)
              break;
            case 'TextArea':
                if(configuration.proximity!=null&&configuration.proximity!="")
                {
                    switch(configuration.proximity){
                        case 'below':
                            await write(configuration.value,into(textBox(below(configuration.proximityLabel), toRightOf(configuration.label))))
                        break;
                        case 'above':
                            await write(configuration.value,into(textBox(below(configuration.proximityLabel), toRightOf(configuration.label))))
                        break;
                        default:
                                console.log("Unhandled "+configuration.label+":"+configuration.value)
                            break;
                    }
                }
                else
                    await write(configuration.value,into(textBox(toRightOf(configuration.label))))
              break;
            case 'TextBox':
                await write(configuration.value,into(textBox(toRightOf(configuration.label))))
            break;
          case 'Button':
              {
                if(!isNotObsForm)
                    await scrollTo(text(observationFormName,toRightOf("History and Examination")))
                else
                    await scrollTo(text(observationFormName))
                await click(button(configuration.value),toRightOf(configuration.label))
            }
            break;      
            case 'Date':
                var dateValue = getDate(configuration.value)
                await timeField({type:"date"},toRightOf(configuration.label)).select(dateValue);
            break;      
            default:
                console.log("Unhandled "+configuration.label+":"+configuration.value)
          }            
    }
}

module.exports={
    selectEntriesTillIterationEnds:selectEntriesTillIterationEnds,
    verifyConfigurations:verifyConfigurations,
    executeConfigurations:executeConfigurations,
    repeatUntilNotFound:repeatUntilNotVisible,
    repeatUntilFound:repeatUntilFound,
    repeatUntilEnabled:repeatUntilEnabled
}