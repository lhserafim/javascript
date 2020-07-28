// ./ é o caminho relativo

let modulo = require('./ModuloExports');

console.log(modulo);
console.log(modulo.ola);
console.log(modulo.bemVindo);
console.log(modulo.ateLogo);

// Precisei separar o módulo de exportação, pois a exportação estava "sobrescrevendo" a exportação anterior
modulo = require('./ModuloExports2');
console.log(modulo);
console.log(modulo.bomDia);