//Conjunto de códigos que poderao ser utilizados quando eu quiser

function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

// alterar("Titulo de exemplo"); com parâmetro

function somar(x, y) {
    let total = x + y; //Let -> apenas dentro do bloco;

    return total;
    //document.getElementById("campo").value = total;
}

var resultado = somar(10, 10);