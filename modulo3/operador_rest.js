function adicionar(...numeros) {
    console.log(numeros);
}


function adicionarNomes(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ["henrique", "thiago"];

let outros = adicionarNomes(nomes, "Antonio", "Maria");

console.log(outros);

//adicionar(5, 6, 7, 8, 9, 10);