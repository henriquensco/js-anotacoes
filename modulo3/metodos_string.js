let nome = 'Henrique Nascimento Costa';

/* ***** indexOf *****
let resultado = nome.indexOf(' '); //Se determinada setença, palava contem na frase ou palavra

if(nome.indexOf('Silva') > -1) {
    resultado = 'Achou!';
} else {
    resultado = 'Não achou!';
}
*/

/* ***** slice ***** 
let resultado = nome.slice(9, 20);
let resultado = nome.slice(-17); //pode
*/

/* ***** substring ***** 
let resultado = nome.substring(9, 20);
//let resultado = nome.substring(-4); //não pode
*/

/* ***** substr ***** 
let resultado = nome.substr(9, 3); //Posição inicial e quantidade de caracteres
*/

/* ***** replace ***** 
let resultado = nome.replace('Henrique', 'Henrt'); //Substitui palavra
*/

/* ***** toUpperCase ***** 
let resultado = nome.toUpperCase();
*/

/* ***** concat *****
let resultado = nome.concat(' ', 'Nascimento');
*/

/* ***** trim ***** 
let resultado = nome.trim(); //Remove espaços vazios tanto do começo quanto do fim das strings
*/

/* ***** charAt *****
let resultado = nome.charAt(13);
*/

/* ***** split ***** */
let resultado = nome.split(' ');



//console.log("Nome: "+nome);
console.log(resultado);