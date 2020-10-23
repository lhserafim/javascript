// Aula 512. Configuração & Launcher #01
const express = require('express')
const app = express()

//app.listen(3000)
// Vou colocar uma callback para mostrar que o listener funcionou.
app.listen(3000, () => {
    console.log('Backend executando...')
})
