module.exports = fileLister;
let fs = require('fs')

function fileLister(dirName, fileExt, callback) {
  fs.readdir(dirName, (err, data) => {
    if(err) {
      return callback(err);
    } else {
      let filteredList = [];
      for(let i=0; i<data.length; i++) {
        if(data[i].includes("." + fileExt)) {
          filteredList.push(data[i]);
        }
      }
      callback(null, filteredList);
    }
  })
}
