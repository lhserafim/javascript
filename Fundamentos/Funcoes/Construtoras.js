// Funções construtoras em JS se assemelham a classes, pois podem ser instanciadas

function Carro(velocidadeMax = 200, delta = 5) {
    // Atributo privado -> pertence APENAS AO ESCOPO desta função
    // Ou seja, não poderá ser acessado quando o objeto for instanciado
    // Desta forma, a velocidade atual não poderá ser alterada externamente. Encapsulamento
    let velocidadeAtual = 0;

    // O THIS é o responsável por transformar algo como público, ou seja, para ser acessível fora do escopo 
    // da func

    // Se eu quisesse criar o método como privado, era só colocar como let ou const
    // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }

    // metodo publico
    // resposável por pegar a velocidade atual 
    // O que fiz aqui, é similar a criar um atributo private no java e usar um get para pegá-lo
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro; // Instanciando uma função como faço no Java. Os parenteses são opcionais
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(320, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());