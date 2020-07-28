// Desafio ler um arquivo usando o file system
// Usar uma promise, para encapsular a leitura de um arquivo
// de tal forma que o resultado da promesa vai ser o conteúdo do arquivo

// Primeiro, vou ler o arquvio dados.txt

// Requerer o file system
const fs = require('fs');
const path = require('path'); // vou usar o path só para "testar"

//__dirname -> É uma constante que está presente em todos os diretórios do node e REPRESENTA o diretório atual
//const caminho = __dirname + '/dados.txt'; // Como está no diretório atual, posso ler desta forma
const caminho = path.join(__dirname,'dados.txt');

// Leitura sincrona MENOS indicado
console.log('---- SINCRONO ----');
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// Leitura assíncrona MAIS indicado

fs.readFile(caminho, 'utf-8',(err, conteudo) => {
    console.log('---- ASSINCRONO ----');
    console.log(conteudo.toString());
})

// Criando uma função, para ser usada de callback na leitura assincrona
function exibirConteudo(err, conteudo) {
    console.log('---- ASSINCRONO 2, SEM UTF-8 e PASSANDO FUNCTION----');
    console.log(conteudo.toString());
}
fs.readFile(caminho, exibirConteudo);

// Lendo usando promise leitura Sincrona
function lerArquivoViaPromise(caminho) {
    return new Promise(resolve => {
        //Sincrono
        const conteudo = fs.readFileSync(caminho, 'utf-8')
        resolve(['RESOLVEU: ', conteudo]);
    })
}

lerArquivoViaPromise(caminho).then(console.log);

// p = lerArquivoViaPromise();
// p.then(console.log);

// Lendo usando promise leitura assíncrona
function lerArquivoViaPromiseAssincrona(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8',(err, conteudo) => {
            resolve(['Resolveu assincrono: ',conteudo.toString()])
        })
    })
}

lerArquivoViaPromiseAssincrona(caminho)
    .then(console.log);
