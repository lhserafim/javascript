// Aula 421. Utilizando Electron IPC (Inter-Process Communication)
// IPC estabelece uma comunicação entre os processos, aqui entre front e back

const { ipcMain } = require('electron')

// O primeiro parâmetro (process-subtitles), é o nome do canal de comunicação
ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitles', [
        {name: 'i', amount: 1234},
        {name: 'you', amount: 980},
        {name: 'he', amount: 853},
        {name: 'it', amount: 1234},
        {name: 'are', amount: 980},
        {name: 'love', amount: 853}
    ]) // Quando eu passar paths, recebo este array
})

// Para que eu possa carregar este arquivo, preciso importá-lo no arquivo background.js