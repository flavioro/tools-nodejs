const fs = require('fs');
const fileExists = require('./tools/checkFile')
// import fs from 'fs'
const ReplaceAll = require('./tools/replaceAll')

const replaceTextFile = () => {

  console.log(ReplaceAll.ReplaceAll('Do more', 'more', 'more and more'))

  // const strReplace = ReplaceAll.ReplaceAll
  // console.log(strReplace)
  // // let txtReplace = new strReplace()
  // let txtReplace = new strReplace
  // console.log(txtReplace)
}

async function validFile() {
  let fileExists1 = await fileExists.fileExists("./src/tmp/httpd.conf");

  if (fileExists1) {
    replaceTextFile()
  }

}


replaceTextFile()
validFile()