// Recurso implementado em 2015 ECMA2015
// É uma forma de você tirar algo de um objeto, array, etc

// Exemplo Destructuring OBJETO
// Dado um objeto pessoa
console.log('---- OBJETO ----');
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 15
    }
}

// Eu poderia acessar os valores usando a notação ponto.
console.log(pessoa.nome);
console.log(pessoa.endereco.logradouro);

// Mas posso usar o Destructuring
// Os colchetes {} indicam o destructuring
const { nome, idade} = pessoa;

console.log(nome, idade);

// Preciso colocar o mesmo nome do atributo do objeto
const {nome: n, idade: i} = pessoa;
console.log(n,i);

// Acessando o objeto dentro de objeto
const {endereco: {logradouro, numero}} = pessoa;

console.log(logradouro, numero);

// Exemplo Destructuring ARRAY
console.log('---- ARRAY ----');
const [a] = [10];
console.log(a);

const [n0,n1,n2,n3,n4] = [10,20,30,40,50];
console.log(n0,n1,n2,n3,n4);

// Exemplo Destructuring FUNÇÃO
console.log('---- FUNÇÃO ----');

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj));
console.log(rand({min: 955}));