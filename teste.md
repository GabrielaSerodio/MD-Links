Com o comando `npm install <githubname>/<reponame>` podemos instalar diretamente
pelo GitHub. Ver [docs oficiais dp `npm install`aqui](https://docs.npmjs.com/cli/install)

Por exemplo, o
[`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser) que é
usado para o currículo não está publicado nos registros públicos do NPM, com
isso temos que instalar diretamente desde o GitHub com o commando `npm install
Laboratoria/curriculum-parser`.

### Sugestões de implementação

A implementação deste projeto tem várias partes: ler do sistema de arquivos,
receber argumento através da linha de comando, analisar um teste, fazer
consultas HTTP, ... e tudo isso pode ser feito de muitas formas, tanto com
bibliotecas quanto com JS puro.

Para esse projeto recomendamos o uso de [expressões regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)