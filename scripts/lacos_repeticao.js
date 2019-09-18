// var i = 0;
// var soma = 0;

// for (var val = 0; val < 100; val++) {
//     console.log("O valor de val quando val é " + val + " é " + val);
// }

// var resposta = '';
// while(resposta !== 'SAIR'){
//     resposta = prompt().toUpperCase();
//     console.log('==============================')
//     console.log("Sua resposta foi '" + resposta + "'");
// }

//Desafio do Triângulo

// var caracteres = '';
// var controle = 0;
// var interno = 24;

// while (controle < 50) {
//     if (controle < 25) {
//         caracteres += '*';
//         console.log(caracteres);
//     }
//     else{
//         caracteres = caracteres.substr(0, interno);
//         interno--;
//         console.log(caracteres);
//     }
//     controle++;

// }

//Trabalhando com "for in" e "for of"

var array = ['a', 'b', 'c', 'd', 'e']

for(let a of array){
    console.log(a)
}

var myObj = {
    nome: 'Wellington',
    sobrenome: 'Nora',
    idade: 24
}

for(let prop in myObj){
    console.log(myObj[prop]);
}