// Igual
console.log('1' == '1'); // true
console.log('1' == 1); // true
console.log(2 == 3); // false

// Estritamente igual
console.log('1' === 1); // false. É false pq o tipo é diferente
console.log('1' === '1'); // true

// Diferente
console.log('3' != 3); //false
// Estritamente diferente
console.log('3' !== 3); // true

// Menor, Maior, Menor Igual, Maior Igual
console.log(3 > 3);
console.log(3 >= 3);
console.log(2 < 3);
console.log(2 <= 3);

// Assim como no java, a data de Referencia é 01/01/1970
const d1 = new Date(0); // o 0 corresponde a esta data
const d2 = new Date(0);
console.log(d1 == d2); // Da falso, pq está comparando endereço de memória  false
console.log(d1.getTime === d2.getTime); // agora sim, comparando a data  true
console.log(undefined == null); // true
console.log(undefined === null); // false

console.log('' == null); // false
