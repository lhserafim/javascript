// Fazendo um operador ternário em uma expreção lambda

// A primeira parte de um operador ternário é uma expressão relacional
const num = num => num >= 7? 'aprovado':'reprovado';

console.log(num(8));
console.log(num(4));