var myObj = {
    nome: 'Wellington',
    sobrenome: 'Nora',
    idade: 24
}

//Pega todas as chaves de um objeto
var chaves = Object.keys(myObj);

for(var i = 0; i < chaves.length; i++){
    console.log(myObj[chaves[i]]);
}

//Verifica se existe uma propriedade específica em um objeto
console.log(myObj.hasOwnProperty("nome"));
console.log("nome" in myObj);