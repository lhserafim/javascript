// Vou usar a notação .. para sair do diretório (igual é feito no terminal)
// Acessando pelo caminho RELATIVO. Melhor do que usar o caminho absoluto
const moduloA = require('../../ExportsImports/ModuloExports'); // navegando até o arquivo
console.log(moduloA.ola);

// Importando um módulo core, que vem com o node
const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end(); 
}).listen(8080); 