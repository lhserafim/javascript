// Criar function que irá esperar por X tempo para executar uma promise
function esperarPor(tempo = 2000) { // usando valor default(padrão) em uma function 
    // vou retornar uma promeça após o tempo X
    // sempre que eu uso promise, passo uma função. Os parâmetros são resolve e reject
    // Neste exemplo não estou usando arrow function
    // Preciso instanciar a promise
    return new Promise(function(resolve, reject) {
        // Passar para a função setTimeout uma callback e os milisegundos
        setTimeout(function() {
            console.log('Executando promise...',new Date());
            //resolve('Resolveu', new Date()); // NÃO FUNCIONA O 2 PARAM, pois só posso passar 1 param em PROMISE
            resolve({texto: 'Resolveu', tempo: new Date()});
        }, tempo)
    })
}

// Para executar a promisse, usar o .then()
let p = esperarPor(3000);
//p.then(texto => console.log(texto));

p.then(() => esperarPor())
 .then(esperarPor)
 .then(esperarPor(5000))
 .then(console.log);