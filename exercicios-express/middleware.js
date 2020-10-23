function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Seja bem vindo ${nome}.`)
        next()
    }
}

// Exportando o módulo p/ ser acessado pelo index.js
module.exports = saudacao