const fs = require('fs');
const fileExists = require('./tools/checkFile')
// import fs from 'fs'
const replaceText = require('./tools/replaceAll')

function replaceTextFile() {
  // const Cat = books.Cat
  // let cat1 = new Cat("Manny");

  const strReplace = replaceText.ReplaceAll
  let txtReplace = new strReplace()

  const textReplace = txtReplace("  UseCanonicalName Off ", "UseCanonicalName Off", "UseCanonicalName Off \n   ProxyPreserveHost On")
  console.log(textReplace)


}

async function validFile() { 
  let fileExists1 = await fileExists.fileExists("./src/tmp/httpd.conf");

  if (fileExists1) {
    replaceTextFile()
  }

}



validFile()