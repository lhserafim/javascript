/**
 * Este arquivo será utilizado para fazer a leitura do arquivo leitura.json
 * No Node já temos um pacote instalado para fazer a leitura e escrita de arquivos
 * O nome do arquivo é fs
 * Para usá-lo, necessário require('fs')
 * __dirname -> É uma constante que está presente em todos os diretórios do node e REPRESENTA o diretório atual
 */

 const fs = require('fs');
 
 const caminho = __dirname + '/Leitura.json'; // sou obrigado a informar o __dirname + 

 // Sincrono menos indicado, pq vai travar o eventloop até acabar de ler o arquivo
 const conteudo = fs.readFileSync(caminho, 'utf-8')
 console.log(conteudo);

 // Assincrono mais indicado
 /**
  * No caso do assíncrono, é necessário passar uma callback function, com 2 param. Erro e Conteúdo
  * A callback será chamada após a leitura do arquivo (o tratamento disto é interno da função readFile)
  */
 fs.readFile(caminho, 'utf-8',(err, conteudo) => {
     //const config = conteudo
     //console.log(conteudo);
     const config = JSON.parse(conteudo); // Transformar de texto em objeto
     console.log(`${config.db.host}:${config.db.port}`);     
 })

// ESPECIFICAMENTE PARA ARQUIVOS DO TIPO JSON temos uma forma mais simples de ler o arquivo de forma sincrona
const config = require('./Leitura.json'); // NESTE CASO, preciso informar que é um arquivo .json
console.log(config.db); // Lendo desta forma, já é convertido em objeto

// __dirname -> é o diretório atual
// lendo os arquivos de um diretório
fs.readdir(__dirname,(err, arquivos) =>{
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})