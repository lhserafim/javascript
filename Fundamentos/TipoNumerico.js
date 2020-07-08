const num1 = 1.0 // por ser .0 o JS converte p/ inteiro
const num2 = 1.232322342242;
const num3 = 1;
const num4 = Number('2.0');

// Number com N maiúsculo é uma FUNCTION
// number com n minusculo é um tipo

console.log(num1, num2, num3, num4);
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
console.log(typeof num1);
console.log(typeof num2);

const total = (num1 + num2 + num3) * num4;
console.log(total)

console.log(total.toFixed(3)); // 3 casas decimais
console.log(total.toString()); // converter para string
console.log(total.toString(2)); // binário

// ALGUNS CUIDADOS
// Divisão por zero
console.log(7/0); // retorna um tipo Infinity
console.log("20"/2); // O JS aceita uma string p/ fazer a conta
console.log((20.30232).toFixed(2)) // Funciona
