let fs = require('fs');
let fileString = fs.readFileSync(process.argv[2]).toString();
let fileArray = fileString.split("\n");
let newLineCount = fileArray.length - 1;
console.log(newLineCount);
