// Facilita nas situações onde é necessário concatenar várias strings
// Permite a quebra de linhas, preservando os espaços, tabs, etc
// O template string faz a interpolação

// Forma mais convencional (antes 2015)
const nome  = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
console.log(concatenacao);

// Exemplo usando template string
const template = `

Olá
    ${nome}
    !!`;

console.log(template);
console.log(`


`);

// expressoes
console.log(`1 + 1 = ${1 + 1}`);

// Utilizando lambda (arrow function) + template String
const up = texto => texto.toUpperCase();
console.log(`EI...${up('luiz serafim')}`);