// FORMAS DE PERCORRER O ARRAY
// ForEach

const pilotos = ['Vettel', 'Alonso', 'Kyviat', 'Leclerc', 'Latifi'];

// pilotos é o array
// forEach vai ler cada linha elemento do array
// () função criada no estilo callback, será chamada para cada iteracao

/*
forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
A function that accepts up to three arguments. 
forEach calls the callbackfn function one time for each element in the array.
*/


pilotos.forEach(function(nome, indice, array) {
    console.log(`${indice + 1} - ${nome}`)
    console.log(array);
})

pilotos.forEach(nome => console.log(nome));

// Posso criar uma função e passá-la como parametro dentro do forEach()
const posicao = function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`) }

pilotos.forEach(posicao);