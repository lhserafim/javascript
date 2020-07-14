// A forma que o JS defini herança é um objeto fazendo referencia para seu protótipo, que 
// pode possuir atributos e comportamentos que podem ser acessados pelo seu objeto filho

// Criando objetos pela notação literal
const ferrari = {
    modelo: 'F40',
    velMax: 320
}

const volvo = {
    modelo: 'V40',
    velMax: 220
}
// __proto__ é para referenciar para o "pai"
console.log(ferrari.__proto__); // {} 
console.log(ferrari.__proto__ === Object.prototype); //true 
// Aqui vale uma observação, ele só é true pq foi criado pela notação literal, se criar por funçao construtora será falso

// Cadeia de herança.. prototype chain

Object.prototype.attr0 = 0; // Este é o nível mais alto na herança // EVITAR! Pois isso será alterado p/ todos os objetos!!!
const avo = {attr1: 1};
const pai = {__proto__: avo, attr2: 2};
const filho = {__proto__: pai, attr3: 3};
console.log(filho.attr0);
console.log(filho.attr1);
console.log(filho.attr2);

// Exemplo com sombreamento shadowing
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} km/h.`;
    }

}

const mclaren = {
    modelo: 'Senna',
    velMax: 320 // Este atributo irá sombrear o do pai. Shadowing
}

const alfaRomeo = {
    modelo: 'Stalvio',
    status() {
        // this referencia o objeto atual, super referencia o protótipo
        return `${this.modelo}: ${super.status()}`; // super vai chamar o método do pai (protótipo)
    }
}

// Estabelecendo a relação de herança
Object.setPrototypeOf(mclaren,carro);
Object.setPrototypeOf(alfaRomeo,carro);

// Por padrão o toString() vai trazer os atributos e métodos que pertencem ao objeto (mesmo tendo o prototype definido)
console.log(mclaren);
console.log(alfaRomeo);

// Mas é possível acessá-los 
alfaRomeo.acelerarMais(100);
console.log(alfaRomeo.status())
alfaRomeo.acelerarMais(100);
console.log(alfaRomeo.status()) // traz o método status sombreado

mclaren.acelerarMais(300);
console.log(mclaren.status()); // Traz o status original

// usando o object.create e for in
const pai1 = {nome: 'Pedro', corCabelo: 'Preto'};
const filha1 = Object.create(pai1); // define o pai, o protótipo
filha1.nome = 'Ana';
console.log(filha1, filha1.corCabelo); // Atributos herdados precisam ser explicitados na chamada
const filha2 = Object.create(pai1, {
    nome: {value: 'Bia', writable: false, enumerable: true }
});

console.log(filha2.nome);
filha2.nome = 'Carla'; // Não vai alterar, pois foi definido como writable: false
console.log(filha2.nome, filha2.corCabelo);

// Como saber se um atributo é do próprio objeto ou veio por herança
for (let key in filha2) {
    // Usando operação ternária
    filha2.hasOwnProperty(key) ? console.log(`Próprio ${key}`) : console.log(`Por herança ${key}`);
}