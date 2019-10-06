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
var myFun = function () { document.querySelector('#myInput2').removeAttribute('value') }
document.querySelector('#myInput2').addEventListener('mousemove', myFunc);
document.querySelector('#myInput2').addEventListener('click', myFun)

//---- PROPAGAÇÃO DE EVENTO ----
document.querySelector('ul').addEventListener('click',
    function () {
        console.log(this);
    }
)

document.querySelector('li').addEventListener('click',
    function (event) {
        event.stopPropagation();
        console.log(this);
    }
)

//Evitar que um formulário seja enviado no click de um botão
// document.querySelector('form').addEventListener('submit',
//     function (event) {
//         event.preventDefault();
//     }
// )

//Evitar o menu ao clicar com o botão direito no mouse
document.querySelector('button').addEventListener('contextmenu',
    function (event) {
        event.preventDefault();
        console.log(this);
    }
)

//Brincando com os inputs
document.querySelector('input').addEventListener('keyup',
    function (event) {
        if(event.keyCode === 13){
            if(this.value !== ''){
                this.style.background = 'green';
            }
        }
        else{
            this.style.background = 'red';
        }
    }
)