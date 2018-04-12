"use strict"

// get the 8 hour average 
//
const da = new Date()
const currentYear       = da.getFullYear();
const currentMonth      = da.getUTCMonth();
const currentDate       = da.getUTCDate();
const currentHour       = da.getUTCHours();
const currentMinute     = da.getUTCMinutes();
const currentSeconds    = da.getUTCSeconds();

if(currentMonth < 10){
    currentMonth = '0' + currentMonth.toString();
}
if(currentDate < 10){
    currentDate = '0' + currentDate.toString();
}
if(currentHour < 10){
    currentHour = '0' + currentHour.toString(); // append a 0 to front for formatting
}
if(currentMinute < 10){
    currentMinute = '0' + currentMinute.toString();
}
if(currentSeconds < 10){
    currentSeconds = '0' + currentSeconds.toString();
}

const UTCdateTime = ( currentYear + '-' + currentMonth + '-' + currentDate + 'T' + currentHour + ':' + currentMinute + ':' + currentSeconds );

console.log('Date Time : ' + UTCdateTime);

const OpenAQ = {
    getResults:(query = '0 0')=>{
        console.log("Loading coords into API");
        var url = `https://api.openaq.org/v1/measurements?coordinates=${query}`;
        console.log(url);
        return fetch(url).then((res) => res.json());
    }
    // Get OZONE readings from last 8 hours
};


module.exports = OpenAQ;
