// Chamar várias promises ao mesmo tempo e só quer chamar o .then quando TODAS as promises forem resolvidas

function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max];
    }
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo)
    })
}

// Promise.all, passando um array de funções que retornam PROMISES, que fica aguardando as promises serem
// resolvidas ou rejeitadas e no final ele vai chamar a função .then()
function gerarVariosNum() {
    return Promise.all([
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,10),
        gerarNumerosEntre(1,60,500),
    ])
}

console.time('Tempo de Execução');  // passar uma label

gerarVariosNum()
    .then(console.log)
    .then(() => {
        //console.timeLog('Tempo de Execução');
        console.timeEnd('Tempo de Execução');
    })