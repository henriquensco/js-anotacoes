let infos = {
    nome: 'Henrique',
    sobrenome: 'Nascimento',
    idade: 19
};

let novaInfo = {
    ...infos,
    cidade: 'Florianopolis',
    estado: 'Santa Catariana',
    pais: 'Brasil'
};

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'alksodpsap3s',
        data_cadastro:'10032021'
    };
    return novasInfo;
}

console.log(adicionarInfo({nome: 'Henrique', sobrenome: 'Nascimento'}));

//console.log(novaInfo);

//let numeros = [1, 2, 3, 4];
//let outros = [...numeros, 5, 6, 7, 8];