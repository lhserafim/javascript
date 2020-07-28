/**
 * For Of é um novo tipo de laço que foi adicionado recentemente ao JS
 * Diferentemente do FOR IN que trabalha em cima do ÍNDICE o FOR OF trabalha em cima dos VALORES
 */

// Usando em cima de String
for (let letra of "Cod3r") {
    console.log(letra);
}

// Usando em cima de array
const assuntosEcma = ['Map', 'Set', 'Promise'];

// usando o for in p/ mostrar que usa o indice
for (let i in assuntosEcma) {
    console.log(i);
}

for (let i of assuntosEcma) {
    console.log(i);
}

// Usando em map
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}],
]);

for (let i of assuntosMap) {
    console.log(i);
}

console.log('Percorrendo as chaves');
for (let i of assuntosMap.keys()) {
    console.log(i);
}

console.log('Percorrendo os valores');
for (let i of assuntosMap.values()) {
    console.log(i);
}

// Usando e fazendo o destructuring
for (let [ch, vl] of assuntosMap.entries()) {
    console.log('chave:',ch, 'valor:',vl);
}