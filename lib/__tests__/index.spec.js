const mdLinks = require("../index.js");

const dataTestLinks = [{
  href: "https://docs.npmjs.com/cli/install",
  text: "docs oficiais dp `npm install`aqui"
},
{
  href: "https://github.com/Laboratoria/curriculum-parser",
  text: "`curriculum-parser`"
},
{
  href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions",
  text: "expressões regulares"
}
];

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("should return 3 links", (done) => {
    mdLinks("lib/__tests__/README.md").then(result => {
      expect(result).toEqual(dataTestLinks);
      done();
    });
  });

  it("should return an Erro", (done) => {
    mdLinks("../lib/__tests__/txt.txt").catch(result => {
      expect(result).toEqual("erro de leitura de arquivo Error: ENOENT: no such file or directory, open '../lib/__tests__/txt.txt'");
      done();
    });
  });
});