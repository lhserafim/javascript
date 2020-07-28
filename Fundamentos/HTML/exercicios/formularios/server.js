/**
 * Vou acessar a pasta onde o server está /Users/lhserafim/Estudos/Java Script/Fundamentos/HTML/exercicios/formularios
 * 1. Criar o arquivo package.json, via comando 'npm init -y'
 * 2. Instalar dependências
 * 2.1. npm i --save express@4.16.3 -E
 * 2.2. npm i --save body-parser@1.18.2 -E
 * 3. A pasta node_module e os arquivos package.json e package-lock.json serão criados
 * 4. Configurar o servidor
 * 5. IMPORTANTE para funcionar preciso definir a porta listener usando:
 * app.listen(3003) 
 * 6. Colocar a porta para escutar 
 * 7. Acessar o diretório que /HTML/exercicios/formularios/ e digitar no terminal node server.js
 */


// Vou requerer as dependencias
const express = require('express')
const bodyParser = require('body-parser')
const app = express() // Carregar o express() em uma variável

app.use(bodyParser.urlencoded({extended: true})) // e dizer que ela usa o bodyParser

// Quero atender ao método POST em cima da URL /usuarios
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003) // Colocar a porta para escutar e digitar no terminal node.js