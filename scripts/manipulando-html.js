//pegar um elemento HTML
var item = document.querySelector('.list-item');
console.log(item);

//pegar todos os elementos
var lista = document.querySelectorAll('.list-item');
console.log(lista);

for(var l of lista){
    console.log(l);
}

//Substituir texto
document.querySelector('.list-item').textContent = 'Wellington Nora';

//Pegar o conteudo HTML
var html = document.querySelector('#item-1').innerHTML
console.log(html)

//Injetar conteúdo HTML na página
document.querySelector('#item-1').innerHTML = '<b>Gosto de programar<br />'
var teste = document.querySelector('#item-1').innerHTML
console.log(teste);

//Para pegar todo o conteúdo da tag
var teste = document.querySelector('#item-1').outerHTML
console.log(teste);

//Removendo elementos
document.querySelector('input').remove();
document.querySelector('#item-1').remove();

//Criando um novo elemento
var myLi = document.createElement('li');
myLi.textContent = 'Adicionando um novo item'
myLi.id = 'meu-id'
myLi.className = 'text-center';
document.querySelector('ul').appendChild(myLi);

//Adicionandm um elemento em uma ordem especifica
var myLi1 = document.createElement('li');
myLi1.textContent = 'Wellington Nora';
document.querySelector('.list-item:first-child').insertAdjacentHTML('beforebegin', myLi1.outerHTML);
document.querySelector('.list-item').insertAdjacentHTML('afterend', myLi1.outerHTML);

//Trabalhando com insert
var firstLi = document.createElement('li');
firstLi.textContent = 'primeiro elemento';
var ul = document.querySelector('ul')
ul.insertBefore(firstLi, ul.querySelector('ul').firstChild)
document.querySelector('ul').insertBefore(firstLi, document.querySelector('ul').firstChild)


