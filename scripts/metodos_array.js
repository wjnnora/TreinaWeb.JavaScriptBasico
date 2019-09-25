//Ordenando um array
var meuArray = [1, 4, 10, 0, 3, 4, 0, 2]
meuArray.sort((a, b) => a > b ? 1 : -1);
console.log(meuArray);

//Utilizando o método foreach
meuArray.forEach(n => {
    console.log(n * 2);
})

//Utilizando o método 
meuArray.map(n => {
    console.log(n * 2);
})

//Utilizando o método find para encontrar o primeiro elemento par da lista
console.log(`Meu array: ${meuArray}`);
console.log(`Primeiro elemento par da lista: ${meuArray.find(n => n % 2 === 0)}`);

//Utilizando o método findIndex para encontrar o indice do primeiro elemento impar da lista
console.log("Meu array: " + meuArray);
console.log("Posicao do primeiro item impar da lista: " + meuArray.findIndex(n => n % 2 !== 0))

//Utilizando o método filter para encontrar todos os elementos pares do array
console.log("Como está o array atualmente: " + array1);
console.log("Encontrando todos os elementos pares: " + meuArray.filter(n => n % 2 === 0))

var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [7, 8, 9, 10, 11, 12];
//Utilizando o método Concat
console.log("Concatenando arrays: " + array1.concat(array2));

//Utilizando o Join para converter um array para uma string
console.log(array1.join(''))
console.log(array1.join(';-;'))

//Adicionar um elemento no final de um array
array1.push("Teste");
console.log(array1);

//Removendo o último elemento de um array
array1.pop();
console.log(array1);

//Adicionando um elemento no começo de um array
array1.unshift("teste");
console.log(array1);

//Removendo o primeiro elemento de um array
array1.shift();
console.log(array1);

//Utilizando o método splice para remover um elemento em uma determinada posição de um array
console.log("Como está o array atual: " + array1);
array1.splice(2, 1);
console.log("Array após a remoção: " + array1);

//Utilizando o método splice para adicionar um elemento em uma determinada posição de um array
console.log("Como está o array atual: " + array1);
array1.splice(3, 0, "Meu Teste");
console.log("Array após a adição do elemento: " + array1);

//Utilizando o método slice
console.log("Array atualmente: " + array1);
var fatia = array1.slice(1, 5);
console.log("Fatia retirada: " + fatia);
