// Tratamento de erros dentro das promises
// Necessário usar o bloco try / catch

// Esta função em algumas situações vai gerar erro e em outras não
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        // Posso envolver minha lógica dentro de um bloco try catch
        try {
            if (Math.random() < chanceErro) {
                consol.log('Escrevi errado de próposito pra forçar o erro');
                reject('Ocorreu um erro!');
            } else {
                resolve(valor);
            }
        } catch (e) {
            reject(e);
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    // Temos 2 formas de tratar. Colocar o .catch() é a forma mais comum
    .catch(err => console.log(`Erro: ${err}`));