const { join } = require('path');
const { readdirSync, renameSync } = require('fs');
const [dir, search, replace] = process.argv.slice(2);
const match = RegExp(search, 'g');
const files = readdirSync(dir);

files
  .filter(file => file.match(match))
  .forEach(file => {
    const filePath = join(dir, file);
    const newFilePath = join(dir, file.replace(match, replace));

    renameSync(filePath, newFilePath);
  });

// Usage
// node rename.js path/to/directory 'string-to-search' 'string-to-replace''


// E X A M P L E S
//node rename.js tst casa_ casa- //RENAME * 'casa_' to 'casa-'
//node rename.js ../../nextjs/site-next/public/inicio/projetos-slides casa_ casa- //RENAME * 'casa_' to 'casa-'
// node rename.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.012/carousel-full - Copia/" 