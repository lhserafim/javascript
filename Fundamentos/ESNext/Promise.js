/**
 * Promises nada mais é do que promessas em JS
 * Usamos quando fazemos um processamento assíncrono
 * Basicamente uma promessa pode ser Atendida (resolve) ou Não Atendida (reject)
 * Promises aceita só 1 parametro, este pode ser um obj, array, string, etc 
 * Promise é de algo que será executado no futuro e dará um retorno no futuro
 */

console.log(typeof Promise); //function

// Para eu usar uma Promise, eu preciso passar uma function para ela
// Ex.:
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Luiz', 'Maria', 'João']);
}) 

// para eu executar a promessa, preciso passar .then(), QUE TAMBÉM TERÁ UMA FUNÇÃO passada a ela o valor
// que foi cumprido
p.then(function(valor){
    console.log(valor);
});

p.then(valor => console.log(valor)); // versao arrow function

// Encadeando .then
const letraMinuscula = letra => letra.toLowerCase();
p.then(valor => valor) // [ 'Ana', 'Luiz', 'Maria', 'João' ]
 .then(valor => valor[0]) // Ana
 .then(valor => valor[0]) // A
 //.then(valor => valor.toLowerCase()) //a
 .then(letraMinuscula)
 .then(console.log)
 //.then(valor => console.log(valor));

console.log(typeof p); //object

function falarDepoisDe(segundos, frase) {
    // O meu promise, está recebendo um callback do tipo arrow
    return new Promise((resolve, reject) => {
        setTimeout(() => { // o timeout foi colocado só para simular uma operação assíncrona
            resolve(frase) // Quando acontecer o setTimeout vai chamar o resolve, que chama a frase
            //reject(frase)
        }, segundos * 1000) // Como eu recebo o tempo em milisegundos, converto para segundos
    });
}

// Para acessar a Promise, preciso usar a função .then()
falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('----!!'))
.then(outraFrase => console.log(outraFrase)) 
//.catch(e => console.log(e));

// Para tratar o reject em uma função promise, devo usar o .catch