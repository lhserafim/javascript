// Quase tudo em JS é função.
// Inclusive o typeOf Object é uma função!

console.log(typeof Object);  // function

class Produto {}
console.log(typeof Produto); // function

// FUNÇÕES Exemplos básicos

// Função SEM RETORNO
// Não preciso tipificar as variáveis
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3); // Obs.: O JS aceitaria menos ou mais parametros para função. Ele trata do jeito dele isso

// Função COM RETORNO
function retornarSoma(a, b = 0) { // o b = 0 é só p/ mostrar que aceita valores default
    return a + b;
}

imprimirSoma(3,3); // Obs.: O JS aceitaria menos ou mais parametros para função. Ele trata do jeito dele isso

// ARMAZENANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL
const imprimirSoma2 = function(a, b) {
    console.log(a + b);
}

imprimirSoma2(2, 3);

// ARMAZENANDO UMA FUNÇÃO ARROW DENTRO DE UMA VARIÁVEL
const soma = (a, b) => {
   return a + b
};

console.log(soma(2, 10));

// ARMAZENANDO UMA FUNÇÃO ARROW, RETORNO IMPLÍCITO EM UMA VARIÁVEL
// sem chaves, significa que vai ter retorno (igual java) e precisa ser só uma linha de código

const soma2 = (a,b) => (a + b);
console.log(soma2(2,2));

const soma3 = () => (10 + 10);
console.log(soma3());

const texto = a => console.log(a);
texto("texto legal");
