var teste = 'minha string de teste';
var outro = ' Hello World ';

//Exibe o tamanho da string
console.log(teste.length);

//Exibe o primeiro caractere da string
console.log(teste[0]);

//Exibe o último caractere da string
console.log(teste[teste.length - 1]);

//Remove os espaços à esquerda
console.log(outro.trimLeft());

//Remove os espaços à direita 
console.log (outro.trimRight());

//Remove os espaços dos dois lados
console.log

//Repetindo string
//OBS: O acento grave permite a sintaxe abaixo
var nome = 'Wellington';
console.log(`Meu nome é ${nome} `.repeat(2));

//Trabalhando com regex
var data = 'Meu nome é Wellington e nasci dia 28/09/1994';
var minhaRegex = /\d{2}\/\d{2}\/\d{4}/
var result = data.match(minhaRegex);

