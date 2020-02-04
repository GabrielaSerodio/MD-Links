# Markdown Links

##  Extrair links de um arquivo Markdown (Node.js) v.1.0.0


##### Argumento

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada é
  relativa, deve resolver como sendo relativa ao diretório onde foi chamada -
  _current working directory_

##### Valor de retorno

A função deve retornar uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.

#### Exemplo

```js
const mdLinks = require("md-links");
mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```

## Como instalar:
Para executar esta biblioteca, você deverá ter o NodeJS e npm instalados.

$ npm install -g GabrielaSerodio/MD-Links

#### Como utilizar
$ md-links ./some/example.md
