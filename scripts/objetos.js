// var person = {
//     name: 'Welligton',
//     middle_name: 'Junior',
//     surname: 'Nora',
//     idade: 24,
//     write_first_name: function(){
//         console.log(this.name)
//     },
//     write_middle_name() {
//         console.log(this.middle_name)
//     },
//     write_surname: () => {
//         console.log(this.surname);
//         console.log("Apenas um teste");
//     }
// }

// person['surname'];
// person['write_surname']();
// person.propriedade_teste = 'Minha futura idade será 25 anos.'
// delete person.write_surname;

//Testando Arrays
// var numeros = [1, 2, 3, 4, 5];

// console.log(numeros[0]);

//Trabalhando com JSON
var myObj = {
    name: 'Pencil',
    color: 'yellow',
    size: '15 cm'
}

var objJson = JSON.stringify(myObj);
var volta = JSON.parse(objJson);

