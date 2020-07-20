/**
 * Para iniciar o projeto
 * 1. Criar um diretório para o projeto
 * 2. Navegar para o diretório e digitar 2 comandos no terminal
 *  2.1. 'npm init -y' Este comando irá criar o arquivo package.json
 *  2.2. 'npm i --save express@4.16.2 -E' Este comando irá instalar o express, na versão informada e não permitir alterações
 * 3. Criar a pasta src
 * 4. Criar o arquivo servidor.js
 * 5. Instalar o nodemon 'npm i --save-dev nodemon@1.14.11 -E' VEJA QUE FOI INSTALADO COMO UMA DEPENDÊNCIA DE DESENVOLVIMENTO APENAS
 * 6. Acesar o postman
 *  6.1. 
 */

 // Declarar uma porta
 const porta = 3003;
 const express = require('express'); // está dentro de node_module
 const app = express(); // Atribuindo o express para o app

// Adicionando este middleware só para testar
app.get('/produtos',(req, res, next) => {
    console.log('Middleware 1...');
    next();
})

// get é uma forma de requisição
// passando uma função middleware
app.get('/produtos',(req, res, next) => {
    res.send({
       nome: 'Notebook',
       preco: 123.45}) // converte p/ JSON
}); 

app.listen(porta,() => {
   console.log(`Servidor executando na porta ${porta}.`);
})