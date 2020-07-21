// Revisão

// let e const

/**
 * let e const, diferentemente do var, tem escopo de bloco
 */

// isso dará erro
// {
//     let a = 10;
//     var b = 20;
//     const c = 3;
// }
// console.log(b); // OK
// console.log(c); // erro
// console.log(a); // erro

// Template String ``
/**
 * Permite a quebra de linhas dentro de sua sintaxe e tmb a interpolação com variaveis
 */ 

const produto = 'iPad';
console.log(`${produto} 
é caro
d+!`);

// Destructuring
/** 
 * Permite desestruturar uma String, um Array e Objeto
*/

const [l, e, ...tras] = "Cod3r";
console.log(l,e,tras); // C o [ 'd', '3', 'r' ]

const [x, y] = [1,2];
console.log(x,y);

const {idade, nome} = {nome: 'Ana', idade: 10};
console.log(idade, nome);

