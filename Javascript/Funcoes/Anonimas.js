// Obviamente, funções anonimas são funções sem nome!

const soma = function(x,y) {
    return x + y;
}

// Só pra "brincar"
// Pasando uma função como default value de uma variável na função
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b));
}

imprimirResultado(3,4); // sem passar o param 3
imprimirResultado(3,4,soma); // Passando o param 3
imprimirResultado(3,4,function(a, b){
    return a * b;
}); // Passando o param 3 como uma OUTRA FUNC ANONIMA

imprimirResultado(3,4,(a,b) => a * b); // Passando o param 3 como Arrow Function

// Funcao anonima dentro de obj
const pessoa = {
    falar: function() {
        console.log('Olá');
    }
}
pessoa.falar();