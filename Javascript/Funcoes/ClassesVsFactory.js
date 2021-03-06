// Em JS classe nada mais é do que uma função escrita de forma difente

// EM JS eu posso criar objetos a partir de:
// Uma Função construtora
// De uma Factory
// A partir de uma classe

class Pessoa {
    constructor(nome) {
        this.nome = nome; // Usei o this, tornei público
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`); // neste contexto, PRECISO usar o THIS
    }
}

const pessoa = new Pessoa('Luiz');
pessoa.falar();

///////

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João');
p2.falar();