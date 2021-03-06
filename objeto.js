let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,    
    ligar: function() {
        console.log("Ligando o " + this.modelo);
        this.ligado = true;
    },
    acelerar: function() {
        if(this.ligado == true) {
            console.log("riiriirri");
        } else {
            console.log(this.nome+ " "+this.modelo+" não está ligado")
        }
    }
} //Object

let carros = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Ferrari', modelo: 'Spider'}
]; //Object dentro de Array

console.log(carros);

//carro.ligar();
//carro.acelerar();