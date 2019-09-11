//Uma das maneiras de declarar uma variável global
window.a = 40;

//Variáveis, quando não declaras com seu tipo, se tornam globais
//Variáveis do tipo const e let são muito similares em seus comportamentos
if(true){
    numero = 10;
    const meuNome = 'Wellington Nora';
    let idade = 24;
}

console.log(numero);

function MinhaFuncao(){
    var teste = 31;
    console.log(a - 10);
}

MinhaFuncao();