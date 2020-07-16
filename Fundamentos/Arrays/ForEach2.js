// Criando meu próprio forEach
// Alterando o Array, adicionando uma função ao prototype

Array.prototype.forEach2 = function(callback) { // chamei de callback, mas poderia ser qualquer nome
    for (let i = 0 ; i < this.length; i++) {
        callback(this[i], i, this); //  3 parâmetros que são passados para um callback
    }

}

const pilotos = ['Vettel', 'Alonso', 'Kyviat', 'Leclerc', 'Latifi'];

pilotos.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1} - ${nome}`)
    console.log(array);
})

