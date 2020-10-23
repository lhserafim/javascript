module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send('Produto > salvar > ' + texto )
    }

    function obter(req, res) {
        res.send('Produto > obter > ' + texto )
    }    

    app.get('/api/produto', salvar)
    app.post('/api/produto', obter)

    return { salvar, obter }
}