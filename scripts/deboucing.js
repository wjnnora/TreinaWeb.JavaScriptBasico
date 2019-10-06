//Criando um timeout
// var myTimeOut = setTimeout(function(){console.log('Wellington Nora')}, 5000)
// var myInterval = setInterval(() => {
//     console.log('Exemplo');
// }, 2000);

// //Parando um timeout
// clearTimeout(myTimeOut);
// clearInterval(myInterval);

var time;
var div = document.querySelector('div');
var input = document.querySelector('input');

input.addEventListener('keyup',
    function () {
        clearTimeout(time);
        time = setTimeout(
            () => {
                div.textContent = this.value;
            }, 1000)

    }
)
