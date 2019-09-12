var num1 = 3;
var num2 = 4;

//Operadores ternários
var maior = num1 > num2 ? num1 : num2;

console.log("O maior número é " + maior)

//Condicionais IF e ELSE
if (num1 > num2)
    console.log("No segundo teste o maior número e " + num1);
else
    console.log("No segundo teste o maior número e " + num2);

//Utilizando o Switch Case
var idade = 13;

switch (idade) {
    case 24:
        console.log("Você é o Wellington Junior Nora");
        break;
    case 13:
        console.log("Você é o Jeferson Henrique Nora");
        break;
    case 22:
        console.log("Você é o Giovane Henrique Nora");
        break;
    default:
        console.log("Você não é nenhum dos nomes previstos");
        break;
}

//Desafio dos números pares ou impares
var verificar = 10;
var resultado = verificar % 2;

switch (resultado) {
    
    case 0:
        console.log("O número " + verificar + " é par");
        break;
    default:
        console.log("O número " + verificar + " é impar");
        break;

}

//Vogal ou consoante

var vogais = 'adtexiohu';

for(var i = 0; i < vogais.length; i++)
{
    switch(vogais[i])
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("A letra " + vogais[i].toUpperCase() + " é uma vogal.");
            break;
        default:
            console.log("A letra " + vogais[i].toUpperCase() + " é uma consoante.");
            break;

    }

}