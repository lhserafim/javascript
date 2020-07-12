// Função escrita de forma padão

let dobro = function(a) {
    return 2 * a;
}

console.log(dobro(10));

// Escrevendo com função arrow
console.log('Versão 1');
let dobroV1 = (a) => {  // Função arrow sempre é uma função anonima. Para Utilizá-la SEMPRE será necessário armazená-la em variável
    return 2 * a;
}
console.log(dobroV1(10));

console.log('Versão 2');
// Usado quando eu tenho funções de 1 única linha
// Então não preciso das chaves e o RETORNO É IMPLICITO
// se tenho 1 arg apenas, posso tirar o parentes
let dobroV2 = a => 2 * a;
console.log(dobroV2(10));

console.log('Versão 3');
// sem parametros
let texto = () => 'Olá Mundo!';
let texto2 = _ => 'Olá Mundo'; // _ é um parâmetro!
console.log(texto());

// USANDO THIS no contexto de arrow function
// No contexto de arrow functions, o THIS é local
// setInterval é uma função temporizadora
function Pessoa() {
    this.idade = 0;
    // O primeiro arg do setInterval é uma função, que aqui neste exemplo é uma arrow function
    setInterval(() => {
        this.idade++;
        console.log(this.idade)
    },1000 )
}

new Pessoa;

