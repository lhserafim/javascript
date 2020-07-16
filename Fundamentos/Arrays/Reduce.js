/**
 * O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, 
 * resultando num único valor de retorno.
 */

const alunos = [
    {nome: 'João', nota: 7.4, bolsista: false},
    {nome: 'Maria', nota: 9.4, bolsista: true},
    {nome: 'Pedro', nota: 9.2, bolsista: false},
    {nome: 'Ana', nota: 8.4, bolsista: true},
]


console.log(alunos.map(e => e.nota));
// Usando o map para acessar um atributo do array de objetos
const resultado = alunos.map(e => e.nota).reduce(function(acumulador, valorAtual){
    console.log(acumulador, valorAtual);
    return acumulador + valorAtual;
}, 10); // o 10 é o valor inicial, usei aqui só para demonstrar. NÃO É OBRIGATÓRIO! E normalmente é 0 ou 1

console.log('Resultado final:',resultado);

// Todos os alunos são bolsistas?
// Aplicar a lógica do && para retornar true apenas se condicao for verdadeira
console.log(true && false); // false
console.log(true && true); // true;
// Então, sabendo da verdade acima, vou criar uma função arrow dentro de const todosBolsistas
const todosBolsistas = (resp, bolsista) => resp && bolsista; // só retorna true se true && true
console.log(alunos.map(a => a.bolsista)); // [ false, true, false, true ]
// faço o .map para pegar o atributo bolsista de todos os elementos e passo p/ o reduce, que chama a funçao
// que faz a operação lógica && 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)); // false
// outra forma
console.log(alunos.map(a => a.bolsista).reduce(function(acc, valor) {
    return acc && valor;
})); // false

// Algum aluno é bolsista?
console.log(alunos.map(a => a.bolsista).reduce(function(acc, valor) {
    return acc || valor;
})); // true
// Também poderia substituir a function anonima por uma constante