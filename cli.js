const mdLinks = require('./lib/index.js')

mdLinks('./README.md')
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
