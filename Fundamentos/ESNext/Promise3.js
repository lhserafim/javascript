// Criar uma função para gerar números aleatórios usando promises

function gerarNumerosEntre(min, max) {
    if (min > max) {
        // Se o min for maior que o max, vou usar o destructuring para corrigir!
        [max, min] = [min, max];
    }
    // Vou retornar uma promise
    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    })
}

gerarNumerosEntre(1,60)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi: ${numX10}`)
    .then(console.log);