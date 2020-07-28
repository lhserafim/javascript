// Consumindo um JSON, sem usar axios e sem promise

// Sem promise
const http = require('http');
const { resolve } = require('path');

// o callback, que será chamada quando o arquivo JSON estiver totalmente carregado
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    // Usar o método get
    http.get(url, res => {
        let resultado = '';

        // Os dados que forem chegando, vão sendo adicionados a variável resultado
        res.on('data', dados => {
            resultado += dados;
        })

        // ao final, quando todos os dados chegaram, converter p/ objeto
        res.on('end', () => {
            callback(JSON.parse(resultado));
        })
    })
}

let nomes = [];
// CALLBACK HELL!!!!
getTurma('A', alunos => {
    //console.log(alunos);
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
            console.log(nomes);
        });
    }); 
});

// Usando promises
const http = require('http');
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        // Usar o método get
        http.get(url, res => {
            let resultado = '';

            // Os dados que forem chegando, vão sendo adicionados a variável resultado
            res.on('data', dados => {
                resultado += dados;
            })

            // ao final, quando todos os dados chegaram, converter p/ objeto
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Promise.all - permite que eu coloque todas a promises dentro de uma e quando todas forem resolvidas
// ele chamará a cadeia

// Promise.all, passando um array de funções que retornam PROMISES, que fica aguardando as promises serem
// resolvidas ou rejeitadas e no final ele vai chamar a função .then()
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // concatenar tudo em um array só
    .then(alunos => alunos.map(aluno => aluno.nome)) // pegar a lista de todos os alunos e pegar só o nome deles
    .then(nomes => console.log(nomes)) // e finalmente chamei o array de nomes e imprimi no console
    .catch(e => console.log(e.message)); // é importante sempre tratar o reject com o .catch

//teste do reject
getTurma('D').catch(e => console.log(e.message));