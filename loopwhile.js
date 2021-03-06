let html = '';

let c = 0;

while(c < 10) {
    html += "Número: "+c+"<br/>";
    c++;
}

document.getElementById("demo").innerHTML = html;