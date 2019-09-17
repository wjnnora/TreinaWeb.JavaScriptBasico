// //É possível armazenar uma função dentro de uma variável
// var minhafuncao = function sum(n1, n2){
//     console.log("O resultado da soma de " + n1 + " + " + n2 + " é " + (n1 + n2));

// }

// minhafuncao(10 , 4)

// var nome = prompt("Digite um nome: ")
// var resultado = ContaCaracteresNome(nome);
// function ContaCaracteresNome(nome){
//     return nome.length;
// }
// console.log(resultado);

//Declarando uma função anônima e armazenando-a dentro de uma variável

// var variavel = function(){
//     console.log("Meu nome é Wellington Junior Nora e tenho 24 anos.");
// }

// setTimeout(variavel, 1500);

//Trabalhando com as Arrow Functions 
// setTimeout(function(){
//     console.log("Meu nome é Wellington Junior Nora");
// }, 1000)

// setTimeout( () => console.log("Meu nome é Wellington Nora"))

// function RealizaCalculo(numero1, numero2){
//     Imprime(numero1, numero2);
// }

// function Imprime(n1, n2){
//     console.log("O resultado é " + (n1 + n2))
// }

// RealizaCalculo(10, 10);

//Desafio do número primo

// var numero = prompt("Digite o número a ser verificado: ");

// var result = numeroPrimo(numero);

// function numeroPrimo(num1){
//     for(var i = 2; i <= num1; i++){
//         if(num1 % i === 0){
//             console.log(i  + " é um número primo.");
//         }   
//     }
// }

// console.log(result);

//Operador Spread
var array1 = [1, 2, 3]
var array2 = [4, 5, 6]

Soma(...array2)

function Soma(n1, n2, n3){
    console.log("Resultado: " + (n1 + n2 + n3));
}


