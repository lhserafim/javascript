/**
 * Async e Await
 * É um recurso do ES8
 * Objetivo simplificar o uso de promise
 * Faz seu código assíncrono PARECER sincrono
 */

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

// Primeira coisa que é preciso fazer é marcar uma função como async! Só posso usar o await se marcar
// a função como async
let obterAlunos = async () => {
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');
    return [].concat(turmaA, turmaB, turmaC);
} // Sempre retorna um objeto AsyncFunction

// O .then() será feito em cima desta função
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes));