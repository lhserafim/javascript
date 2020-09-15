// Aula 422. Processando Arquivos #01
// Este arquivo vai os paths dos N arquivos e retornar todas as linhas que estão dentro das legendas, ou seja, 
// vai me retornar um grande arquivo com todas as linhas da legenda

const fs = require('fs')

module.exports = paths => {
    return new Promise((resolver, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8')) // retorna todas as linhas, com base nos paths e transforma em texto
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)  // juntei todos os conteúdos usando reduce
                .split('\n') // gero minhas rows a partir do split
            resolver(rows) //retorna as colunas
        } catch(e) {
            reject(e)
        }
    })
}