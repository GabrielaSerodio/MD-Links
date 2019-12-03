# Markdown Links

## Índice

* [Instalar] (# instalar)
* [Uso] (# uso)
* [Contribuir] (# contribuição)

***

## Instalar

Você pode obtê-lo em npm
`` ``
$ npm install https://github.com/GabrielaSerodio/SAP003-md-links
`` ``
Em seguida, importe-o com um módulo

Exemplo
`` ``
const mdLinks = require ("links md");

mdLinks ("/ some / example.md", {validate: true})
  .then (links => {
    // => [{href, texto, status}]
  })
  .catch (console.error);
`` ``
Você pode usar via CLI (Command Line Interface)
`` ``
$ npm install -g https://github.com/GabrielaSerodio/SAP003-md-links
`` ``
## Uso

O executável de nossa aplicação pode ser executado da seguinte forma através do terminal:

`` ``
md-links <path-to-file> [opções]
`` ``

## Contribuir

Todas as contribuições são bem vindas.

Bifurque o repositório no GitHub
Clone o projeto em sua própria máquina
Instale as ferramentas necessárias para o desenvolvimento: `` `npm install```
Faça as alterações e teste-o: `` `npm test```
Comprometa-o em seu próprio ramo
Empurre seu trabalho de volta para o garfo
Envie uma solicitação pull com observações completas documentando suas alterações