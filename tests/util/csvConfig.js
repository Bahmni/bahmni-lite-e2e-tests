var fs = require("fs");
var path = require('path');
const {Parser} = require('json2csv');
const {csv}=require('csvtojson');


async function modifyCsvContent(file,key,value){
    let str = fs.readFileSync(file,"utf-8");
    const header_cols = str.slice(0, str.indexOf("\n")).trim().split(',');
    const patient= await csv().fromFile(file);
    patient[0][key]=value;
    const patientIncsv= new Parser({fields: header_cols})
                                                .parse(patient);
    fs.writeFileSync(file,patientIncsv.split('"').join(''));
  }
  
async function getCSVasJson(profile){
    return await csv().fromFile(path.join('./data/admin/profileUpload/',profile.toLowerCase()+'.csv'));
  }

async function getUpdatedCSV(profile,regId) {
    let file=path.join('./data/admin/profileUpload/',profile.toLowerCase()+'.csv');
    switch(profile){
        case "Patient":
            gauge.dataStore.scenarioStore.put("patientIdentifier",regId);
            gauge.message(gauge.dataStore.scenarioStore.get("patientIdentifier"));
            await modifyCsvContent(file,'Registration Number',
            regId);
            break;
        case "Encounter":
            await modifyCsvContent(file,'Registration Number',
            gauge.dataStore.scenarioStore.get("patientIdentifier"));
            break;
        default:
            gauge.message("No matched Profile Found");
    }
    return file;
};

  module.exports={
    getUpdatedCSV:getUpdatedCSV,
    getCSVasJson:getCSVasJson
  };