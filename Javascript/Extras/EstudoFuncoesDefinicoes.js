/* 
 * Funções em JS são First class objects (first class citizens) "cidadões de primeira classe"
 * Resumidamente, isto quer dizer que uma função pode ter um comportamento similar a de uma variável, ou seja,
 * pode ser passada como argumento, retornada, adicionada a uma variável, etc
 * 
 * Métodos são funções que são propriedades de um objeto 
*/

/*
 * Função DECLARADA (INSTRUÇÃO)
 * ----------------------------
 * É a função mais tradicional, onde utilizamos definimos um nome e argumentos desta função
 * 
*/

function square(number) {
    return number * number;
}
console.log(square(4));

/*
 * Função EXPRESSÃO (OPERADOR)
 * ---------------------------
 * É similar a uma função declarada, porem esta pode ser ANONIMA e pode ser atribuida a uma variável
 * 
*/

const squareExpress = function(number) { return number * number }
let x = squareExpress(4)
console.log(x) // x gets the value 16

/**
 * De qualquer forma, a expressão PODE e DEVE ter um nome, pois isso irá facilitar na hora de debugar
 * além de permitir recursividade
 * 
*/

const squareExpress2 = function square2(number) { return number * number }
let y = squareExpress2(4)
console.log(y) // x gets the value 16

/**
 * In the following code, the function receives a function defined by a function expression and executes 
 * it for every element of the array received as a second argument. 
 *  
*/

let numbers = [0, 1, 2, 5, 10];

const func = function (x) {
    return x * x * x;
}

function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

let cube = map(func, numbers);
console.log('cube',cube);


// function map(a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//         result[i] = func(a[i]);
//     return result;
// }

// let cube2 = map(numbers);
// console.log('cube2: ',cube2);


function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| properly refers to the person object
      console.log(this.age)
    }, 1000);
  }
  
  var p = new Person();
