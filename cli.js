#! /usr/bin/env node
const mdLinks = require("./lib/index.js");

const patch = process.argv[2];

mdLinks(patch)
  .then((result) => result.forEach((index) => console.log(index.href, index.text)))
  .catch((error) => console.log(error));
