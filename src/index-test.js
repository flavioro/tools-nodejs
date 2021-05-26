const fs = require('fs')
const fileExists = require('./tools/checkFile')
const books = require('./tools/test')
const replace = require('./tools/replaceAll')

async function validFile () {
  const fileExists1 = await fileExists.fileExists('./src/tmp/httpd.conf')

  if (fileExists1) {
    console.log('Here read file')
  }

  console.log(books.favoriteBook().title)
  console.log('Here text')
  const Cat = books.Cat
  const cat1 = new Cat('Manny')
  console.log(cat1.name)
}

function txt () {
  // const Cat = books.Cat
  // let cat1 = new Cat("Manny");
  // const txtReplace = replace('Do more', 'more', 'more and more')
  const txtReplace = replace.ReplaceAll('Do more', 'more', 'more and more')
  console.log(txtReplace)
}

txt()
// validFile()
