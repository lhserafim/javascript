// O for é mais usado para quando temos quantidades determinada

const { Console } = require("console");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('FOR IN');

// FOR IN
// O For IN vai percorre o array e retornar o indíce deste

const notas = [10, 8, 3.2, 4, 6.2, 7.8, 9.2];

// Similar ao SQL 

// FOR c IN (select * from dual) LOOP
//... 
//END LOOP;

for (i in notas) {
    console.log(i, notas[i]); // TRAZENDO POSIÇÃO E VALOR
}

// FOR OF
console.log('FOR OF')
/*
 O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), 
 chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
*/

let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of