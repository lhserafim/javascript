// Uma das tarefas mais comuns é copiar arquivos de um lugar p/ outro
// O Gulp é uma ferramenta que irá sempre trabalhar com funções (tasks) e vc orquestra (em série ou paralelo)

// Importar o GULP
const gulp = require('gulp')

// Importar de dentro do gulp o series
// Posso fazer das duas formas abaixo:
// Forma 1: Fazendo destructuring
const { series, parallel } = require('gulp')  // series, significa que o processamento será em série e parallel em paralelo
// Forma 2: Forma mais tradicional
// const series = gulp.series 

// As funções podem ser criadas declarativas ou arrow
const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

// Criando a função para copiar os arquivos. Note que a função chama uma callback
function copiar(cb) {
    // Essa callback precisa ser chamada quando vc termina de executar determinar tarefa
    console.log('Tarefa de copiar!')
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // passando a source, como array, caminho relativo
    gulp.src('pastaA/**/*.txt') // melhor
        // aplicar transformações nos arquivos que eu defini como arquivos de entrada (src)    
        .pipe(gulp.dest('pastaB')) // Vai criar a pastaB
        // .pipe(metodoA())
        // .pipe(metodoB())
        // .pipe(metodoEtc()) 
    // No final desta função (copiar), eu vou invocar a função que foi passada como parâmetro
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

// Preciso exportar alguma coisa, para que seja executado. 
// Estamos usando padrão do node
// O Gulp espera receber uma tarefa que chamamos de default
// A task default, seria a porta de entrada para executar um script
//module.exports.default = series(copiar) // uma tarefa
module.exports.default = series(parallel(antes1, antes2), copiar, fim) // varias tarefas

// Ir na pasta basico (dentro de gulp) e digitar o comando gulp
// Só irá funcionar se o exports acima for feito

/*
lhserafim@MacBook-Pro-de-Luiz basico % gulp
[14:16:06] Using gulpfile ~/Estudos/Curso Web Moderno/gulp/basico/gulpfile.js
[14:16:06] Starting 'default'...
[14:16:06] Starting 'antes1'...
[14:16:06] Starting 'antes2'...
Tarefa Antes 1!
[14:16:06] Finished 'antes1' after 4.19 ms
Tarefa Antes 2!
[14:16:06] Finished 'antes2' after 11 ms
[14:16:06] Starting 'copiar'...
Tarefa de copiar!
[14:16:06] Finished 'copiar' after 1.98 ms
[14:16:06] Starting 'fim'...
Tarefa fim!
[14:16:06] Finished 'fim' after 527 μs
[14:16:06] Finished 'default' after 24 ms
lhserafim@MacBook-Pro-de-Luiz basico %   
*/