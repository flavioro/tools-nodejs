const { join } = require('path');
const { readdirSync, copyFileSync } = require('fs');
const [dir, search, stringAdd, dirNew] = process.argv.slice(3);
const match = RegExp(search, 'g');
const files = readdirSync(dir);



files
  .filter(file => file.match(match))
  .forEach(file => {
    const filePath = join(dir, file);

    const fileNew = stringAdd + file
    const newFilePath = join(dirNew, fileNew);
    console.log(newFilePath)

    copyFileSync(filePath, newFilePath);
  });

// Usage
// node addNameCopyFile.js path/to/directory 'string-to-search' 'string-to-add' 'path/to/directoryNew'


// E X A M P L E S

// node addNameCopyFile.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.014/carousel-full/" .*jpg$ "114-" "../../ArchShop/fotos/"