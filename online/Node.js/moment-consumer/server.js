const moment = require("moment");

//console.log(moment);

const date = moment();

//console.log(date);

console.log(`year : ${date.format("YYYY")}`)
console.log(`month number : ${date.format("MM")}`)
console.log(`month short : ${date.format("MMM")}`)
console.log(`month : ${date.format("MMMM")}`)
