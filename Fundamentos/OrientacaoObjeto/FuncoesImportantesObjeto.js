const pessoa = {
    nome: 'Rebeca',
    idade: 5,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // vetor

// Lendo usando forEach + lambda (array function)
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

// Lendo usando forEach + Destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: true,
    value: '01/01/2019'
})

// Object.assign (ECMAscript 2015)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2); // adiciona os atributos ao obj original e atualiza os existentes
console.log(obj); 

Object.freeze(obj);