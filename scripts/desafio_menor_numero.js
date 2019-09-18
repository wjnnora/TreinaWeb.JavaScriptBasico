function Menor_Numero(valores) {
    let menor = valores[0];
    let maior = valores[0]
    console.log(menor);
    for (var num of valores) {
        if (num < menor) {
            menor = num;
        }
        else if(num > maior){
            maior = num;
        }
    }
    let arrayRetorno = [menor, maior];
    return arrayRetorno;
}

var meuArray = [1, 2, 3, 4, -45, 200, 147, 148, 291];

var valores = Menor_Numero(meuArray);

console.log("Array passado: " + meuArray);
console.log("Menor valor do array: " + valores[0]);
console.log("Maior valor do array: " + valores[1]);
