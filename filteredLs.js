let fs = require('fs');
let dirName = process.argv[2];
let fileType = process.argv[3];
let files;
let specifiedFiles = [];

function getFileList(callback) {
  fs.readdir(dirName, (err, list) => {
    if(err) {
      throw err;
    } else {
      files = list;
      for(let i = 0; i < files.length; i++) {
        if(files[i].includes("." + fileType)) {
          specifiedFiles.push(files[i])
        }
      }
      callback();
    }
  })
}

function logFileList(){
  for(let i = 0; i < specifiedFiles.length; i++) {
    console.log(specifiedFiles[i]);
  }
}

getFileList(logFileList);
