const { join } = require('path');
const { readdirSync, renameSync } = require('fs');
const [dir, search, stringAdd] = process.argv.slice(2);
const match = RegExp(search, 'g');
const files = readdirSync(dir);

files
  .filter(file => file.match(match))
  .forEach(file => {
    const filePath = join(dir, file);
    const newFilePath = join(dir, stringAdd + file);

    renameSync(filePath, newFilePath);
  });

// Usage
// node rename.js path/to/directory 'string-to-search' 'string-to-add''


// E X A M P L E S

// node addName.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.012/carousel-full - Copia/" .*\.jpg$ 112-