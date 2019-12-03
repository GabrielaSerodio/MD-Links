const fs = require('fs');

const mdLinks = (patch) => {
    let arrayMdLinks = [];
    let object = [];
    
    return new Promise((resolve, reject) => {
        fs.readFile(patch, 'utf8', (err, data) => {
            if (err) {
                reject(`erro de leitura de arquivo ${err}`)
            } else {
            arrayMdLinks = data.match(/\[(.*)\]\((ht.*)\)/gm);
            arrayMdLinks.forEach(item => {
                object.push({
                    text: `${item.match(/(?<=\[).+?(?=\])/g)}` ,
                    href: `${item.match(/(?<=\().+?(?=\))/g)}`                    
                })
                resolve(object)
            })
            }
        })
    })
}

module.exports = mdLinks;

