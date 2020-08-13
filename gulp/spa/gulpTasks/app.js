const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() { // vou minificar o HTML
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true })) // tirar espaços em branco
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss') // referenciar o arq. principal do sass
        .pipe(sass().on('error', sass.logError)) // logar erro , se necessário
        .pipe(uglifycss({ "uglyComments": true })) // tirar comentários
        .pipe(concat('app.min.css')) // minificar
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] })) // usanod o preset mais novo = ENV
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}


// Registrar tasks p/ chamar no servidor, em monitorarArquivos()
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}