const { join } = require('path');
const { readdirSync } = require('fs');
const [dir, search] = process.argv.slice(2);
const match = RegExp(search, 'g');
const files = readdirSync(dir);

files
  .filter(file => file.match(match))
  .forEach(file => {
    const filePath = join(dir, file);
    console.log(filePath)

  });

// Usage
// node rename.js path/to/directory 'string-to-search'

//node showFilesDir.js ../../nextjs/site-next/public/inicio/projetos-slides
//node showFilesDir.js ../../nextjs/site-next/public/inicio/projetos-slides .*\.txt
//node showFilesDir.js ../../nextjs/site-next/public/inicio/projetos-slides .*\.txt$

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

// Start with 'casa' casa^ 

// node showFilesDir.js ../../nextjs/site-next/public/inicio/projetos-slides casa_s.*
// node showFilesDir.js ./tst casa_s.*

// node showFilesDir.js tst casa_.* //return 5 files
// node showFilesDir.js tst .*\.jpg  //return 4 files
// node showFilesDir.js tst .*\.jpg$  //return 3 files