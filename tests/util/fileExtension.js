var path = require("path");

var cwd = process.cwd();
var fs = require("fs");
const {Parser} = require('json2csv');
const {csv}=require('csvtojson');



function parseContent(file) {
  return fs.readFileSync(file, "utf-8");
}

function write(file, content) {
  return fs.writeFileSync(file, content);
}

function rename(fromFile,toFile,done){
  fs.rename(fromFile, toFile, function(err) {
    if ( err ) console.log("ERROR: " + err);
    done();
  });
}

function save(file,contentFile){
  fs.writeFileSync(file,parseContent(contentFile));
}

function openFile(file){
  return fs.openSync(file,"r");
}

function copyFile(from, to){
  fs.copyFileSync(from, to);
}

function exists(path){
  return fs.existsSync(path);
}

function createDirIfNotPresent(path){
  if(!exists(path))
  {
    fs.mkdirSync(path);
    return true;
  }
  return false;
}

function rmContentsOfDir(dirPath,extension) {
  try { var files = fs.readdirSync(dirPath); }
  catch(e) {
    console.log("Error reading directory %s due to %s", dirPath, e);
    return;
  }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = path.join(dirPath , files[i]);
      if(extension && !filePath.endsWith(extension))
        continue;
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmContentsOfDir(filePath);
    }
}

function remove(file) {
  try { fs.unlinkSync(file); }
  catch(e) { console.log("Error removing file %s due to %s", file, e); }
}

async function modifyCsvContent(file,key,value){
  let str = fs.readFileSync(file,"utf-8");
  const header_cols = str.slice(0, str.indexOf("\n")).trim().split(',');
  const patient= await csv().fromFile(file);
  patient[0][key]=value;
  const patientIncsv= new Parser({fields: header_cols})
                                              .parse(patient);
  fs.writeFileSync(file,patientIncsv.split('"').join(''));
}

async function readCSVasJson(file){
  return await csv().fromFile(file);
}

module.exports={
  modifyCsvContent:modifyCsvContent,
  readCSVasJson:readCSVasJson,
  parseContent:parseContent,
  copyFile:copyFile,
  write: write,
  save:save,
  rename:rename,
  rmContentsOfDir:rmContentsOfDir,
  remove: remove,
  createDirIfNotPresent:createDirIfNotPresent,
  exists:exists
};
