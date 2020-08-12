// Como o typeScript não é interpretado pelos navegadores, vou convertê-lo para js usando o gulp

// Fazendo os imports
const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // Não preciso definir os aquivos, pois a definição já foi feita em tsconfig.json
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)

/**
 * 
lhserafim@MacBook-Pro-de-Luiz typeScript %gulp
[15:03:42] Using gulpfile ~/Estudos/Curso Web Moderno/gulp/typeScript/gulpfile.js
[15:03:42] Starting 'default'...
[15:03:42] Starting 'transformacaoTS'...
[15:03:44] Finished 'transformacaoTS' after 2.38 s
[15:03:44] Finished 'default' after 2.38 s
lhserafim@MacBook-Pro-de-Luiz typeScript % 

lhserafim@MacBook-Pro-de-Luiz build % node app.js
Civic custa 89499!

 */