// Em JS podemos determinar que um valor é string de 3 formas
// 1. Aspas simples
// 2. Aspas duplas
// 3. Crase - Usado a partir de 2015


const txt1 = 'TextoA';
const txt2 = "TextoB";
const txt3 = `Textoa`;

console.log(typeof txt1);
console.log(typeof txt2);
console.log(typeof txt3);

// Funcoes com string
console.log(txt1.charAt(3)); // a contagem começa por ZERO
console.log(txt2.charCodeAt(3)); // Retorna o código unicode
console.log(txt3.indexOf('a')); // retorna a posicão do caracter
console.log(txt3.indexOf('T')); // retorna a posicão do caracter. Case sensitive
console.log(txt2.substring(0,5)) // A partir de 0, pegar 5 caracteres
console.log(txt2.substring(5)) // Pegar o caractere de indice 5
console.log('Texto exemplo '.concat(txt3).concat(` crase`).concat("!!!"));
console.log('Luiz' + 'Serafim'); // concatenar
console.log("PARALELEPIPEDO".replace('A','@')); // Substituiu apenas a primeira ocorrencia
console.log("P41M31R45".replace(/\d/g, '#')); // usando regex, substitui todas as ocorrencias de numeros
console.log("PARALELEPIPEDO".replace(/\w/g,'e')); // usando marcador g -> global
console.log('ANA MARIA BRAGA'.split(' ')); // Vai separar e gerar um array

const x = 'Luiz Henrique Sanches Serafim'.split(' ');
console.log(typeof x); // vira um array do tipo object
