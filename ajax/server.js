
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

// CONFIGURAÇÃO NO SERVIDOR P/ UPLOAD DE ARQUIVO

// Requerer o multer, que vai interpretar o formulário do arquivo de upload
const multer = require('multer')

// Definir as regras de diretório de destino e nome de arquivo
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,'./upload') // Salvar no diretório atual ('.')
    },
    filename: function(req, file, callback) {
        callback(null,`${Date.now()}_${file.originalname}`) // colocando a data (em milisegundos) no nome do arquivo
    }
})

// passando a storage, definida anteriormente para o construtor do multer
const upload = multer({storage}).single('arquivo') // nome do 'arquivo' que virá na requisição. Está na name do elemento input

// Disponibilizo uma rota para este método post e trato a callback
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

// FIM DA CONFIGURAÇÃO P/ UPLOAD DE ARQUIVO

// Quando vier uma requisição, nesta URL, do tipo GET, retornar OK. Também é um middleware
app.get('/teste', (req, res) => res.send(new Date()))

app.listen(8080, () => console.log('Executando...'))