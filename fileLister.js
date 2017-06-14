let fileListModule = require('./fileListModule');

function printFiles(err, list) {
  if(err !== null) {
    throw err;
  } else {
    for(let i=0; i<list.length; i++) {
      console.log(list[i]);
    }
  }
}

fileListModule(process.argv[2], process.argv[3], printFiles)
