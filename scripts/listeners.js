//Adicionando um evento no input
document.querySelector('input').addEventListener('click',
    function () {
        document.querySelector('#myInput1').setAttribute('value', 'Wellington Nora');
    }
)

//Adicionando um evento no button
document.querySelector('button').addEventListener('click',
    function () {
        alert('O botão foi clicado.');
    }
)

//Remover um evento
var myFunc = function () { document.querySelector('#myInput2').setAttribute('value', 'Outro Wellington') }
var myFun = function () { document.querySelector('#myInput2').removeAttribute('value')}
document.querySelector('#myInput2').addEventListener('mousemove', myFunc);
document.querySelector('#myInput2').addEventListener('click', myFun)
