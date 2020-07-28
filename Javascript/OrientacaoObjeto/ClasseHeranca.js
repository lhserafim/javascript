// Herança funciona em cima de prototype
// Por traz são funçoes trabalhando com protótipos

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

// Herança igual ao JAVA
// Ou seja Pai tem um protótipo que é Avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome); // Igual ao Java. O super() vai chamar a superclasse que aqui é o Avo
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva'); // passei 1 parametro só para testar, poderia passar 2
    }
}

const filho = new Filho();
console.log(filho);