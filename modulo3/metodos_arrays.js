let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = [45, 4, 9, 16, 25];
let lista3 = [];

let lista_usuarios = [
    {id: 1, nome: 'Henrique', sobrenome: 'Nascimento'},
    {id: 2, nome: 'Tiago', sobrenome: 'Nascimento'},
    {id: 3, nome: 'Joao Paulo', sobrenome: 'Nascimento'},
];


/* REMOVER ITEM DO ARRAY */
//delete lista[1];
//lista.splice(1, 1);

/*
lista[0] = 'Ovos'; //Altera o valor do item
lista[4] = 'Prato'; //Adiciona um novo item
*/

/*
lista.shift(); //Remove o primeiro item do array
lista.pop(); //Remove o ultimo item do array
*/
//lista.push('Prato'); //Adiciona um item no array
//let res = lista.indexOf('Farinha'); //Busca item específico dentro do array
//let res = lista.join('-');
//let res = lista.toString();

//let res = lista.concat(lista2); //Juntar dois arrays

//lista.sort(); //Ordena o array em ordem alfabética
//lista.reverse(); //Inverte a ordem

/* //MAP
let lista3 = [];

lista3 = lista2.map(function(item) {
    return item * 2;
});
*/

/* //FILTER 
lista3 = lista2.filter(function(item) {
    if(item < 20) {
        return true;
    } else {
        return false;
    }
});
*/

/* //EVERY
lista3 = lista2.every(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }

    return ()? true:false; //Fazer a mesma verificação em uma única linha
});
*/

/* //SOME
lista3 = lista2.some(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});
*/

/* //FIND */
let pessoa = lista_usuarios.find(function(item) {
    return (item.nome == 'Henrique') ? true : false;
})

//lista3 = lista2.find(function(item) {
//    return (item == 16) ? true : false;
//});

let res = pessoa;

console.log(res);