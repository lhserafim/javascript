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

// Parametros e retornos são opcionais em JS
function func4(a, b) {
    if (a < 5) {
        console.log(a + b);
    } else {
        return a;
    }
}

func4(4,3);
func4(8,3);

// Parametros variáveis
// atualmente usamos o Rest / Spread
// A função pode não receber argumentos, na sua definição, mas se ao chamá-la eu passar.. posso recuperar os argumentos
function funcSemArgs(){
    let soma = 0;
    for (i in arguments) { // Lembra o Varargs
        soma += arguments[i];
    }
    return soma;
}

console.log(funcSemArgs(10,20,30,40));

// Parâmetro padrão
// Usando o operador OU p/ substituir o null "igual NVL"
function soma4(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    const soma = a + b + c;
    console.log(soma);
}

soma4();

// Obs, a estratégia acima da erro quando passo 0, pois ele troca 0 pelo default 1
soma4(0,0,0);

// Usando uma operação ternária p/ assumir um valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // 1 aqui é o indice do argumento (a = 0 , b = 1, c = 2)
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}
console.log(soma2());

// USANDO VALOR PADRÃO EC2015 -> NOVO PADRÃO MELHOR 
function soma3(a = 1, b = 2, c = 3) {
    return a + b + c;
}

console.log(soma3());