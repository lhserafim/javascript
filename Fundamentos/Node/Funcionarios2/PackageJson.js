// Criando o arquivo package.json
// Pelo terminar, acessar o diretório que eu desejo. Ex.: Funcionarios
// Entrar com o comando npm init -y, isto vai gerar o arquivo package.json, dentro do diretório que estou
// Este arquivo package.json, tem a funcionalidade de descrever meu projeto e tambem controlar as dependências
// 
// Teste
// Vou adicionar a dependencia do modulo axios e a mesma vai atualizar o meu arquivo package.json
// Para isso, dentro do diretório desejado, vou rodar o comando npm i --save axios
// Axios é um cliente HTTP, vai fazer requisiçoes
//
// vai criar dependencia 
//  "dependencies": {
//    "axios": "^0.19.2"
//  }
// Além disso, foi criado o arquivo package-lock.json, que tem que ir p/ o repositório, pois define controles de 
// integridade para garantir a instalação correta dos pacotes

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


