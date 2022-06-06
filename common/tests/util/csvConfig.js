"use strict";
var fs = require("fs");
var path = require('path');
const {Parser} = require('json2csv');
const {csv}=require('csvtojson');
var users = require("./users");

async function modifyCsvContent(file,index,key,value){
    let str = fs.readFileSync(file,"utf-8");
    const header_cols = str.slice(0, str.indexOf("\n")).trim().split(',');
    const userProfile= await csv().fromFile(file);
      userProfile[index][key]=value;
    const patientIncsv= new Parser({fields: header_cols})
                                                .parse(userProfile);
    fs.writeFileSync(file,patientIncsv.split('"').join(''));
  }
  
async function getCSVasJson(profile){
  let file=path.join('./data/admin/profileUpload/',profile.toLowerCase()+'.csv');
    return await csv().fromFile(file);
  }

async function updateCSV(profile) {
  let file=path.join('./data/admin/profileUpload/',profile.toLowerCase()+'.csv');
    let str = fs.readFileSync(file,"utf-8");
    var lines = str.split("\n").length;
    for(let i = 0; i < lines-1; i++){
      let regID=users.getRegID();
    switch(profile){
        case "Patient":
            gauge.dataStore.scenarioStore.put("patientIdentifier"+i,regID);
            await modifyCsvContent(file,i,'Registration Number',
            regID);
            break;
        case "Encounter":
            await modifyCsvContent(file,i,'Registration Number',
            gauge.dataStore.scenarioStore.get("patientIdentifier"+i));
            break;
        default:
            gauge.message("No matched Profile Found");
    }
  }
    gauge.dataStore.scenarioStore.put("fileDataLength",fs.readFileSync(file,"utf-8").split("\n").length);
    return file;
};

async function generateUpdatedCSV(profile){
  return await updateCSV(profile);
};



  module.exports={
    generateUpdatedCSV:generateUpdatedCSV,
    getCSVasJson:getCSVasJson,
  };