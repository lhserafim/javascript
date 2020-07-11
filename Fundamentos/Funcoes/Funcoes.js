// JS trata funções como um cidadao de primeira linha
// As funções podem ser atribuidas a variáveis, podem ser passadas como parâmetros, 
// retornar uma func, declarar uma func dentro de uma função
// Isso abre um leque de possibilidades
// OU SEJA, estou tratando a função como um DADO!!!!

// Função em JS é FIRST CLASS OBJECT (CITIZEN) ou HIGH ORDER FUNCTION

// EXEMPLOS:

// Criando uma função de forma literal
function fun1() {} // Parâmetros e Retorno são OPCIONAIS

// Criando uma func e armazenando em variável
const fun2 = function() { } // Note que é uma função ANÔNIMA
const fun2b = fun1();

// Armazenar dentro de um array
const array = [function(){}, fun1, fun2, function(a, b) { return a + b}];
console.log(array[3](10, 20)); // passei o indice e os parâmetros

// Armazenar dentro de um atributo de um objeto
const obj = {
    funcao: function(msg){ return msg }
}
console.log(obj.funcao("Mensagem de teste"));   

// Passar uma func como parâmetro para outra func
function run(fun) { // Aqui o FUN é só uma declaração, é só o parâmetro
    fun()
}

run(function() {console.log('Executando...')}); // é na execução que eu realmente passo a função

 // Uma função pode retornar/conter uma função
 function soma(a,b) {
     return function(c) {
         console.log(a + b + c);
     }
 }

// Chamando a função
soma(10, 10)(5);
// ou 
const funparte1 = soma(10,10);
funparte1(5);