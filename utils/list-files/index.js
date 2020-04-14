const path = require('path');
const fs = require('fs');

function listFiles(dir){
    //joining path of directory 
    const directoryPath = path.join(process.cwd(), dir);
    //passsing directoryPath and callback function
    try{
      const files = fs.readdirSync(directoryPath);
      return files;
    }catch(e){
      console.error('Unable to scan directory: ', e)
    }
  }

  module.exports = listFiles