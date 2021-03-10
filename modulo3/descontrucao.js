let pessoa = {
    nome: 'Henrique',
    sobrenome: 'Nascimento',
    idade: 19,
    social: {
        instagram: 'henrique.nsco',
        github: 'henriquensco'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

//let nome = pessoa.nome;
//let idade = pessoa.idade;

//Descontrução do objeto
//let { nome, sobrenome, idade = 0 } = pessoa;

//let { nome:pessoaNome, sobrenome, idade } = pessoa;


//let { instagram, github } = pessoa.social;

let { nome, sobrenome, idade, social:{ instagram, github }} = pessoa;


function pegarNomeCompleto(obj) {
    return obj.nome+' '+obj.sobrenome;
}

