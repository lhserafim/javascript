// Tratamento de erros em async await

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max];
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!');
        } else {
            resolve(aleatorio);
        }
        resolve(aleatorio);
    })
}

// gerarNumerosEntre(1,5, [1,2,4])
//     .then(console.log)
//     .catch(console.log);

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = [];
        for (let _ of Array(qtdeNumeros).fill()) { // o fill vai gerar os valores os valores para complementar o array
            gerarNumerosEntre(1, 60, numeros);
            // Adicionando os elementos ao array vazio, usando o await
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
        return numeros;
    } catch(e) {
        // tratando o erro
        throw "Que chato"
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log);


