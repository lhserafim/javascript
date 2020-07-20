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
 *  6.1. Passar a url: http://localhost:3003/produtos
 * 7. Instalar o parse, para poder executar no postman
 *  7.1. npm i --save body-parser@1.18.2 -E
 */

// Declarar uma porta
const porta = 3003;
const express = require('express'); // está dentro de node_module
const app = express(); // Atribuindo o express para o app
const bancoDeDados = require('./bancoDeDados'); // Importando o arquivo que tem as funções
const bodyParser = require('body-parser');

// Usando a função urlencoded para encondar o texto na passagem dos parâmetros na url
app.use(bodyParser.urlencoded({ extended: true}));

// Adicionando este middleware só para testar
app.get('/produtos',(req, res, next) => {
    console.log('Middleware 1...');
    next();
})

// get é uma forma de requisição
// passando uma função middleware
app.get('/produtos',(req, res, next) => {
    // Mockado
    // res.send({
    //    nome: 'Notebook',
    //    preco: 123.45}) // converte p/ JSON
    res.send(bancoDeDados.getProdutos());
}); 

// passando parametro ao método get
app.get('/produtos/:id',(req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)); // pegando o id, que vem como parametro na requisição
})

app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); // Retornando o JSON
})

app.put('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, // vem dos parametros
        nome: req.body.nome, // vem do body
        preco: req.body.preco
    })
    res.send(produto); // Retornando o JSON
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); // Retornando o JSON
})

app.listen(porta,() => {
   console.log(`Servidor executando na porta ${porta}.`);
})