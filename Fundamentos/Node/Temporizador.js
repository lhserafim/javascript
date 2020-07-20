const schedule = require('node-schedule');

// Colocando uma função para ser executada de 5 em 5 segundos
//*/5 -> de 5 em 5 seg
//16 a partir das 16
// 0 dom, 1 seg, 2 ter ...
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 1', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel(); // Cancelar o temporizador
    console.log('Cancelando Tarefa 1!')
}, 20000); // depois de 20 segundos

// Criando uma regra de recorrencia
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // de segudna a sexta
regra.hour = 16;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})


// Executando tarefa 1! 55
// Executando tarefa 1! 0
// Executando tarefa 1! 5
// Executando tarefa 1! 10
// Cancelando Tarefa 1!
// Executando Tarefa 2! 30
