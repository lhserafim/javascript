
// Vou requerer as dependencias
const bodyParser = require('body-parser')
const express = require('express')
const app = express() // Carregar o express() em uma variável

// MIDDLEWARES

/* Definindo os middlewares que serão executados sempre que houver uma requisição.
 * O middelware nada mais é do que uma funçao que será executada quando determinada requisição chegar
 * pode ser aplicado para uma determinada URL ou para qualquer requisição que chegar 
*/

app.use(express.static('.')) // O que estou fazendo aqui? Estou dizendo que dentro da pasta atual ('.'), onde o server.js está, sirva (prova) os arquivos estáticos 
app.use(bodyParser.urlencoded({extended: true})) // e dizer que ela usa o bodyParser
/* Se eu quisesse fazer o bodyParse, para uma url especifica, colocaria + 1 param informando a pasta url
app.use('/teste', bodyParser.urlencoded({extended: true}))
*/
app.use(bodyParser.json()) // Ou seja, se vier um Json dentro da requisição, este é o bodyParser que será aplicado

// Quando vier uma requisição, nesta URL, do tipo GET, retornar OK. Também é um middleware
app.get('/teste', (req, res) => res.send('Ok'))

app.listen(8080, () => console.log('Executando...'))