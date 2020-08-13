// Antes de iniciar, criar a pasta gulpTasks, com os arquivos:
// app.js, deps.js e servidor.js

// Vou importar todas as funções criadas nos arquivos da pasta gulpTasks

const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

// Fazedo uma mescla em serie e paralelo, mas criando algumas regras
module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)