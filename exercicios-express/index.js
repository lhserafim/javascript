// Aula 512. Configuração & Launcher #01
const express = require('express')
const app = express()

// o use (ou o all) é utilizado p/ qualquer tipo de requisição (get, post, put, etc). Posso "travar" com app.get, etc.
app.use((req, res) => {
    res.send('Hello World!')
})

//app.listen(3000)
// Vou colocar uma callback para mostrar que o listener funcionou.
app.listen(3000, () => {
    console.log('Backend executando...')
})
