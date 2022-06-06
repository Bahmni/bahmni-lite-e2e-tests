"use strict";
var Buffer = require('buffer/').Buffer

function getUserNameFromEncoding(encodedUser){
    let user = new Buffer(encodedUser,'base64');
    let decodedUser = user.toString('ascii');
    return decodedUser.split(":")[0]
}

function getPasswordFromEncoding(encodedUser){
    let user = new Buffer(encodedUser,'base64');
    let decodedUser = user.toString('ascii');
    return decodedUser.split(":")[1]
}

function randomName(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function getGender(gender){
    if(gender=='M')
        return "Male"
    if(gender=='F')
        return "Female"
    if(gender=='O')
        return "Other"
    if(gender=='U')
        return "Undisclosed"
}

function getRegID(){
    return "BAH-".concat(randomNumber(10000,1000000));
}

module.exports={
    getRegID:getRegID,
    randomName:randomName,
    getUserNameFromEncoding:getUserNameFromEncoding,
    getPasswordFromEncoding:getPasswordFromEncoding,
    getGender:getGender
}