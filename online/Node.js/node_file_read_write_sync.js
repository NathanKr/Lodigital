const fs = require('fs');

const data = 'some content 123';
const path = 'text.txt';

// ---- write file synchronously
fs.writeFileSync(path,data);

// ---- read from file synchronously
const data_read = fs.readFileSync(path,{encoding : 'utf8'});

console.log(data_read);