/**
 * Promises nada mais é do que promessas em JS
 * Usamos quando fazemos um processamento assíncrono
 * Basicamente uma promessa pode ser Atendida (resolve) ou Não Atendida (reject)
 * Promises aceita só 1 parametro
 */

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