// A ideia de getters and setters é a mesma do Java. Encapsulamento

const { type } = require("os");

// JAVA SCRIPT NÃO SUPORTA SOBRECARGA DE MÉTODOS!!  

const sequencia = {
    // o _ antes do nome da variável é uma convenção. Ele "diz" aos outros que vc pretende usar esta 
    // variável internamente. Porém isso não é um BLOQUEIO, é apenas uma convenção.
    _valor: 1, 
    // get & set são funções
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        // posso aplicar regras aqui dentro (if, etc)
        this._valor = valor;
    }
}

console.log(typeof sequencia); // Object

// acessando o valor privado (veja que mesmo com _ ele ainda está exposto)
console.log(sequencia._valor);

// acessando pelo get
console.log(sequencia.valor);
console.log(sequencia.valor);
console.log(sequencia.valor);
console.log(sequencia.valor);

// usando o set
sequencia.valor = 1000;

console.log(sequencia.valor);
console.log(sequencia.valor);
console.log(sequencia.valor);
console.log(sequencia.valor);

// Se eu realmente quiser tornar um atributo privado, melhor usar uma função construtora, pois aí eu crio como let
