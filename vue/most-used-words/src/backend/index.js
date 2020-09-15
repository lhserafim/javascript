// Aula 421. Utilizando Electron IPC (Inter-Process Communication)
// IPC estabelece uma comunicação entre os processos, aqui entre front e back

const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows') //Aula 422. Processando Arquivos #01
const prepareData = require('./prepareData') //Aula 423. Processando Arquivos #02

// O primeiro parâmetro (process-subtitles), é o nome do canal de comunicação
ipcMain.on('process-subtitles', (event, paths) => {
    //console.log(paths)
    //Aula 422. Processando Arquivos #01
    pathsToRows(paths)
        //.then(rows => console.log(rows))
        .then(rows => prepareData(rows)) //Aula 423. Processando Arquivos #02
        .then(words => console.log(words))
        .then(() => {
            event.reply('process-subtitles', [
                {name: 'i', amount: 1234},
                {name: 'you', amount: 980},
                {name: 'he', amount: 853},
                {name: 'it', amount: 1234},
                {name: 'are', amount: 980},
                {name: 'love', amount: 853}
            ]) // Quando eu passar paths, recebo este array
        })

})

// Para que eu possa carregar este arquivo, preciso importá-lo no arquivo background.js