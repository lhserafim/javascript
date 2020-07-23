// Está totalmente ligado ao promise
// faz seu código parecer sincrono

function esperarPor(tempo = 2000) { // usando valor default(padrão) em uma function 
    return new Promise(function(resolve) {
        setTimeout(function() {
            //console.log('Executando promise...');
            resolve();
        }, tempo)
    })
}

// Usando promises
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor) 
    .then(() => console.log('Executando promise 3...'))

// Fazendo o mesmo código usando async await   
// Preciso marcar a função como async 
async function executar() {
    const valor = 10;
    await esperarPor(2000);
    console.log('Async/Await 1..')
    await esperarPor(2000);
    console.log('Async/Await 2..')
    await esperarPor(2000);
    console.log('Async/Await 3..')
    return valor; // coloquei este valor só para testar o .then abaixo
}

executar();

// Para eu acessar um valor, dentro de uma função assincrona, preciso usar o then
executar().then(console.log);