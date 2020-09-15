//Aula 423. Processando Arquivos #02

module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ') // Transforma em um array novamente
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', '')) // caso eu precise remover sem criar função

            resolver(words)
        } catch(e) {
            reject(e)
        }
    })
}

// Esta função irá filtrar o arquivo de legenda e remover as linhas que não são de diálogo
function filterValidRow(row) {
    const notNumber = !parseInt(row.trim()) // Se retornar algo válido, significa que é um número, portanto eu nego a expressão
    const notEmpty = !!row.trim() // montei uma expressão para retornar se não é vazia
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}` // ajuntar todas as rows formando um textão