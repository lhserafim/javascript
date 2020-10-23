const express = require('express')
const app = express()

// importando o arquivo middleware.js, através do seu caminho relativo
const saudacao = require('./middleware')

app.use(saudacao('Luiz Henrique'))

// utilizando o next, eu consigo encadear chamadas. A ordem importa!
app.use((req,res, next)=> {
    console.log('Primeira execução')
    next()
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
