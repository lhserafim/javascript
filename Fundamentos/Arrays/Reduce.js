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