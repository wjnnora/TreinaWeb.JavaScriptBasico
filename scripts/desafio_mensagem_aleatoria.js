var Mensagem = {    
    num: Math.trunc((Math.random() * 5) + 1),
    processar: function () {
        var sms = verifica(this.num);
        this.imprime(sms);
    },
    verifica: function (num, sms) {
        switch (num) {
            case 1:
                sms: "Olá, meu nome é Wellington Nora";
                return sms;
                break;
            case 2:
                sms: "Tudo bem com você?";
                return sms;
                break;
            case 3:
                sms: "Meu aniversário está chegando";
                return sms;
                break;
            case 4:
                sms: "Faço aniversário dia 28 de Setembro.";
                return sms;
                break;
            case 5:
                sms: "Muito prazer em conhecê-lo";
                return sms;
                break;
        }
    },
    imprime: function (sms) {
        console.log(sms)
    }
}