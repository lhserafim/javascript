const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({ // configurações do servidor
            port: 8080,
            open: true, // abrir no navegador
            livereload: true, 
        }))
}

// Fazendo a função que vai monitorar os aquivos e sempre que fizer mudança vai chamar uma das tasks
function monitorarArquivos(cb) {
    // vou referenciar as funções que foram criadas em app.js
    watch('src/**/*.html', () => gulp.series('appHTML')()) //sempre que alterar algum HTML, chamar a função appHTML
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

// para funcionar o monitorarArquivos, em app.js preciso registrar as tasks
/*
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)
*/

module.exports = {
    monitorarArquivos,
    servidor
}