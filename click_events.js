function clicou() {
    document.getElementById("titulo").innerHTML = "Obrigado!";
    // this.innerHTML='clicou' -> Utilizado no HTML
}

function digitou(evento) {
    //console.log(evento);
    if(evento.keyCode == 13 && evento.ctrlKey == true) {
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}