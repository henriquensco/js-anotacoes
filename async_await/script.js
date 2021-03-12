function requisitar(){
    let url =  'https://jsonplaceholder.typicode.com/todos/1';
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
}

async function requisitar2() {
    let url =  'https://jsonplaceholder.typicode.com/todos';
    const params = {
        method:'POST',
        body:JSON.stringify({
            nome: 'Henrique',
            idade: 19
        })
    };

    const r = await fetch(url, params);
    const json = await r.json();
    
    console.log(json);
    console.log('Alguma coisa');
}

requisitar2();