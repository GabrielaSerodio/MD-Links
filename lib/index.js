const fs = require('fs');

const mdLinks = (file) => {
    let arrayMdLinks = [];
    let object = [];
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }   
            arrayMdLinks = data.match(/\[([^\[\]]+)\]\(([^)]+)\)/gm);
            arrayMdLinks.forEach(item => {
                object.push({href: `${item.match(/(?<=\().+?(?=\))/g)}`,
                            text: `${item.match(/(?<=\[).+?(?=\])/g)}`, 
                })
                resolve(object)
            })
        });
    });
}

module.exports = mdLinks;
