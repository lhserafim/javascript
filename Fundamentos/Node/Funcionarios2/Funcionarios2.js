/**
 * Para eu reinstalar as dependências do meu projeto, basta eu acessar o diretório e digitar npm i
 * Ele irá ler o arquivo package.json, localizar as dependências e fazer os donwloadas necessários
 * 
 * Uma forma de eu dar um start no meu projeto é fazendo npm start 
 * O programa vai localiar a chave start dentro do meu package.json, e executar o que está programado
 * Aqui no caso, será executado este mesmo arquivo Funcionarios2.js
 * 
 * Dentro do arquivo package.json, também coloquei a chave dev. Esta chave dev não é padrão (como o start ou test)
 * consequentemente para executá-la é necessário digitar npm run dev
 */


 // DESAFIO
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); // passando assim, ele vai na pasta node_modules e no subdir axios e pega o arquivo index.js

// Encontrar a mulher chinesa, com o menor salário
// usar arrays, map, reduce, filter
// usando o principio do reduce (acumulador, valor atual)
const chinesas = f => f.pais === 'China';
const genero = f => f.genero === 'M';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    const func = funcionarios.filter(chinesas).filter(genero).reduce(menorSalario);
    console.log(func);
});
