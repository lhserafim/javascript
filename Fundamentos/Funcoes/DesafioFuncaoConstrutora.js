// Transformar a classe abaixo em função construtora
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome; // Usei o this, tornei público
//     }
//     falar() {
//         console.log(`Meu nome é ${this.nome}`); // neste contexto, PRECISO usar o THIS
//     }
// }

// const pessoa = new Pessoa('Luiz');
// pessoa.falar();

// Funções construtoras em JS se assemelham a classes, pois podem ser instanciadas

// Desafio!
function Pessoa(nome) {
    this.falar = function() {
        console.log(`Meu nome é ${nome}`);
    }
}

const criarPessoa = new Pessoa('Luiz');
criarPessoa.falar();

