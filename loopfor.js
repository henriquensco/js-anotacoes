// FOR LOOP
// FOR LOOP ARRAY

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];

let texto = '';

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>'

/*
for(let i = 0; i < 10; i++) {
    texto = texto + i + '<br/>';
}
 */

document.getElementById("demo").innerHTML = html;