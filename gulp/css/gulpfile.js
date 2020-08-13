// Fazendo imports iniciais
const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    // Vou fazer sem callback. Mas poderia ser como o exemplo anterior
    return gulp.src('src/sass/index.scss') // Não preciso colocar arquivo por arquivo ou *, pois no index já tem o mapeamento
        .pipe(sass().on('error', sass.logError)) // o sass() faz a conversao o .on() vai logar se houver erro
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/**/*.html') // melhor
        // aplicar transformações nos arquivos que eu defini como arquivos de entrada (src)    
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)