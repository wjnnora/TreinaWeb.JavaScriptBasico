function MinhaFuncao(minhaString) {
    var alfabeto = 'abcdefghijklmnopqrstuvxzywz'.split('');
    console.log(alfabeto);
    var letrasFaltantes = '';    
    
    for (var j = 0; j < alfabeto.length; j++) {
        if(minhaString.indexOf(alfabeto[j]) === -1){
            letrasFaltantes += alfabeto[j];
        }
    }
    console.log('Letras faltantes: ' + letrasFaltantes.split(''));
    console.log('Quantidade de letras faltantes: ' + letrasFaltantes.length);
}