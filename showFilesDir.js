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