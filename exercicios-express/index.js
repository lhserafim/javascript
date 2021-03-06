const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// importando o arquivo middleware.js, através do seu caminho relativo
const saudacao = require('./middleware')

// Chamando direto, sem criar uma constante
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

// usando o body-parser
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(saudacao('Luiz Henrique'))

// utilizando o next, eu consigo encadear chamadas. A ordem importa!
app.use((req,res, next)=> {
    console.log('Primeira execução')
    next()
})

// Quando fazemos requisições do tipo post, os parâmetros costumam ir no corpo da requisição. Uso query
// http://localhost:3000/clientes/relatorio/?completo=true&ano=2020
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

// Normalmente quando fazemos requisições do tipo get, os parâmetros vão na url. Uso params
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.post('/corpo', (req, res) => {
    // Fazendo post, sem bodyparser
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })

    // Fazendo com o bodyParser
    res.send(req.body)
})

// o use (ou o all) é utilizado p/ qualquer tipo de requisição (get, post, put, etc). Posso "travar" com app.get, etc.
app.use((req, res, next) => {
    //res.send('Hello World!')
    res.json({
        name: 'MacBook Pro',
        price: '19202.00'
    })

    console.log('Segunda execução')
    next()
})

app.use((req,res)=> {
    console.log('Terceira execução')
})

//app.listen(3000)
// Vou colocar uma callback para mostrar que o listener funcionou.
app.listen(3000, () => {
    console.log('Backend executando...')
})
