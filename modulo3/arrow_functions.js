function somar(x, y) {
    return x + y;
}

let somar_s = function(x, y) {
    return x + y;
}

//Arrow function
let somar_t = (x, y) => {
    return x + y;
}

let somar_q = (x, y) => x + y;

let letrasNome = (nome) => {
    return nome.length;
}

let letrasNome_d = (nome) => nome.length;
let letrasNome_t = nome => nome.length;



console.log( somar_t(5, 5) );