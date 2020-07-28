/** 
 * Arrow Function
 * São funções anonimas
 * podem ser escritas em 1 única linha
 * */

const soma = (a,b) => a + b;
console.log(soma(10,20));

// Parâmetro default
function log(texto = 'Valor padrão') { // Definindo valor padrão
    console.log(texto);
}
log();

/**
 * Operador rest (ou spread dependendo do contexto)
 * Quando ele agrupa os dados é rest, quando ele espalha é spread
 * Permite a passagem de vários argumentos, utilizando os ...
 * Cria um vetor de argumentos internamente
 */

 function total(...numeros) {
     let total = 0;
     numeros.forEach(n => total += n);
     return total;
 }
console.log(total(1,2,3,8,20,20));

/**
 * ES8: Objcts.values/Obect.entries
 */

const obj = {a: 1, b: 2, c: 3};
console.log(Object.values(obj));
console.log(Object.entries(obj)); // tmb tem o .keys

// Melhorias na notação literal
// Não precisa escrever mais como chave: valor
const nome = 'Carla';
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {};
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}
console.log(new Cachorro().falar());