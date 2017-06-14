let fs = require('fs');
let file = process.argv[2];
let newLineCount;

function countLines(callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if(err) {
      throw err;
    } else {
      let fileArray = data.split("\n");
      newLineCount = fileArray.length - 1;
      callback();
    }
  })
}

function logNewLineCount() {
  console.log(newLineCount);
}

countLines(logNewLineCount);
