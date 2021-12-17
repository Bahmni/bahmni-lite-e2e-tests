
function yesterday() {
    const today = new Date()
    const yesterday = new Date(today)

    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday;
}

function getAgeByYears(yearOfBirth){    
    const today = new Date()
    const dateYearsAgo = new Date(yearOfBirth)

    return (today.getFullYear() - dateYearsAgo.getFullYear())
}

function getAge(yearOfBirth){    
    const today = new Date()
    const dateYearsAgo = new Date(today)

    dateYearsAgo.setFullYear(today.getFullYear() - yearOfBirth.getFullYear())
    dateYearsAgo.setMonth(today.getMonth()-yearOfBirth.getMonth())
    dateYearsAgo.setDate(today.getDate()-yearOfBirth.getDate())
    return dateYearsAgo;
}

function getDateAgo(dateAgo){
    var days = dateAgo.split("/")[0]
    var months = dateAgo.split("/")[1]
    var years = dateAgo.split("/")[2]
    
    const today = new Date()
    const dateYearsAgo = new Date(today)

    dateYearsAgo.setFullYear(dateYearsAgo.getFullYear() - parseInt(years))
    dateYearsAgo.setMonth(dateYearsAgo.getMonth()-parseInt(months))
    dateYearsAgo.setDate(dateYearsAgo.getDate()-parseInt(days))
    return dateYearsAgo;
}

function getDateYearsAgo(numberOfYearsAgo){
    const today = new Date()
    const dateYearsAgo = new Date(today)

    dateYearsAgo.setFullYear(dateYearsAgo.getFullYear() - numberOfYearsAgo)
    return dateYearsAgo;
}
function date() {
    const today = new Date()
    return today
}

function tomorrow() {
    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow;
}

function ddmmyyyy(dateToBeFormatted){
    const date = (dateToBeFormatted==null)? new Date(): dateToBeFormatted;

    var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = date.getFullYear();

    return dd.toString()+mm.toString()+yyyy.toString();
}

function ddmmyyyyHHMM(dateToBeFormatted){
    const date = (dateToBeFormatted==null)? new Date(): dateToBeFormatted;

    var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = date.getFullYear();

    return dd.toString()+"/"+mm.toString()+"/"+yyyy.toString()+" "+(new Date()).getHours()+":"+(new Date().getMinutes());
}

function getyyyymmddFormattedDate(date){
    var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = date.getFullYear();
    return yyyy.toString()+"-"+mm.toString()+"-"+dd.toString();
}

function nextYear() {
	var nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear()+1);
    return nextYear;
}

module.exports={
    today:date,
    yesterday:yesterday,
    ddmmyyyy:ddmmyyyy,
    tomorrow:tomorrow,
    nextYear:nextYear,
    getyyyymmddFormattedDate:getyyyymmddFormattedDate,
    getDateYearsAgo:getDateYearsAgo,
    getDateAgo:getDateAgo,
    getAge:getAge,
    getAgeByYears:getAgeByYears,
    ddmmyyyyMMSS:ddmmyyyyHHMM
}