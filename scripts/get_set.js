var obj = {
    _nome: 'Wellington Nora',
    _idade: 0,
    _mensagem: '',
    get idade() {
        return this._idade;
    },
    set idade(value){
        if(value > 0 && value < 30)
            this._idade = value;
    },
    get mensagem(){
        console.log(`O ${this._nome} tem ${this._idade} anos de idade.`);        
    }
}

console.log(obj.idade);
obj.idade = 25;
console.log(obj.idade);
obj.mensagem;