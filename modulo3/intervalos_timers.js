let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}

let timer_st;

function rodar() {
    timer_st = setTimeout(function() {
        alert("funfou");
    }, 2000);
}

function para_st() {
    clearTimeout(timer_st);
}