"use strict";
console.log('Start sendAnalytics');
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics('The data');
