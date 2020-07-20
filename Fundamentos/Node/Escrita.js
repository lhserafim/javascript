const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.88,
    desconto: 0.15
}
/**
 * Vou gerar um arquivo, a partir de um objeto, utilizando o filesystem(fs)
 * Já converto ele para JSON, para virar texto
 * uso uma callback, apenas para validar se tem erro
 * e utilizo o || para fazer como um nvl
 */
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!'); 
});

