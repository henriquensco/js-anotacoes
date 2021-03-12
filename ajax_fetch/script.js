let url =  'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'POST',
    body:JSON.stringify({
        nome: 'Henrique',
        idade: 19
    })
}

fetch(url, params)
    .then((resposta)=>{
        resposta.json().then((json)=>{
            console.log(json);
        });
    });


/*
Client ID
339763769693-ev92eiv1a2t79amlbd89s1u4g655mq85.apps.googleusercontent.com
Client Secret
5KonzvAjC1dcNc1GrP5zX8zG
info
*/