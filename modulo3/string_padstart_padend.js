//Funções de manipulação de strings

let telefone = '4930';
//console.log(telefone.padEnd(9,'*')); //Preenche no final
//console.log(telefone.padStart(9,'*')); //Preeche no início

let cartao = '8812 8398 8293 4400';

let ultimosDigitos = cartao.slice(-4);

let cartaoMascarado = ultimosDigitos.padStart(16, '*');
//let cartaoMascarado = ultimosDigitos.padEnd(16, '*');

console.log('Este é o seu cartão? '+cartaoMascarado);