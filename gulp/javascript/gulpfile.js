// Neste exemplo, vou simular o que seria um projetinho javascript, usando GULP para aplicar o BABEL
// que irá traduzir o meu JS em algo mais compativel com todos os navegadores

// Vamos fazer os imports necessários, para gerar 1 único arquivo minificado

const { series } = require('gulp') // const series = gulp.series 
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // Não quero que os arquivos de comentários sejam levados p/ o arq. final
            presets: ["env"] // vai pegar a versao mais recente do JS
        }))
        .pipe(uglify())
        .on('error', erro => console.log(err)) // colocando uma função para capturar algum tipo de evento
        .pipe(concat('codigo.min.js')) // nome do arquivo que sejá gerado minificado
        .pipe(gulp.dest('build'))
    
    // retornar a callback para indicar que o processo foi finalizado
    return cb()
}

// poderia ser module.exports...
exports.default = series(padrao)

/*
lhserafim@MacBook-Pro-de-Luiz javascript %gulp
[14:45:08] Using gulpfile ~/Estudos/Curso Web Moderno/gulp/javascript/gulpfile.js
[14:45:08] Starting 'default'...
[14:45:08] Starting 'padrao'...
[14:45:08] Finished 'padrao' after 18 ms
[14:45:08] Finished 'default' after 23 ms
lhserafim@MacBook-Pro-de-Luiz javascript % 
*/

/*
TESTANDO ARQUIVO GERADO (arquivo único com todas as dependências)

lhserafim@MacBook-Pro-de-Luiz javascript %node build/codigo.min.js
261
8

*/
