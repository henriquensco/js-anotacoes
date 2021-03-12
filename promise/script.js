function fazer() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Ok');
        }, 3000);

    });

    return promise;
}

fazer().then((resposta)=>{
    console.log(resposta);
});