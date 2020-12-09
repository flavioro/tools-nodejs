const { join } = require('path');
const { readdirSync, copyFileSync, existsSync, mkdirSync } = require('fs');
const [dir, search, stringAdd] = process.argv.slice(2);
const match = RegExp(search, 'g');
const files = readdirSync(dir);

const dirNew = `${dir}/${stringAdd}`
if (!existsSync(dirNew)){
  mkdirSync(dirNew);
}

files
  .filter(file => file.match(match))
  .forEach(file => {
    const filePath = join(dir, file);

    const fileNew = stringAdd + file
    const newFilePath = join(dirNew, fileNew);

    copyFileSync(filePath, newFilePath);
  });

// Usage
// node copyFile.js path/to/directory 'string-to-search' 'string-to-add''


// E X A M P L E S

// node copyFile.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.013/carousel-full/" .*\.jpg$ 113-
// node copyFile.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.014/carousel-full/" .*\.jpg$ 114-
// node copyFile.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.015/carousel-full/" .*\.jpg$ 115-
// node copyFile.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.016/carousel-full/" .*\.jpg$ 116-
// node copyFile.js "../../HtmlCssJs/Site-bootstrap/assets/img/img-projetos/10.017/carousel-full/" .*\.jpg$ 117-