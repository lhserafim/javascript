// QUAL A IDÉIA DO CALBACK?
// A idéia do CALLBACK é você passar uma funçao, para outra função e quando determinado evento acontecer,
// esta função que você passou será chamada de volta

// Se fosse um vetor em java
//String[] maisLangs = {"Python ", "Lisp ", "Perl ", "Go"};
const fabricantes = ['Ferrari', 'Mercedes', 'Renault','Alfa Romeo'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}.  ${nome}`); // Usando o Template String
}
fabricantes.forEach(imprimir);

fabricantes.forEach(function(fabricante) {
    console.log(fabricante);
})

fabricantes.forEach( fabricante => console.log(fabricante));

// OU SEJA, conforme os exemplos acima, a função imprimir foi chamada para cada elemento da lista (forEach) 

// OUTRO EXEMPLO COM E SEM CALL BACK

const notas = [10, 8, 7.2, 3.1, 8.1, 4.2];

// SEM CALLBACK
let notasBaixas = []; // criando um array sem valores ( EM JS arrays são dinâmicos)
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

// COM CALLBACK
// função será invocada para cada um dos elementos
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7;
})
console.log(notasBaixas2);

const notasBaixas3 = notas.filter(notas => notas < 7);
console.log(notasBaixas3);

// Exemplo usando dom
// body é a tag que eu quero
// a resposta da função é um array, por isso o índice 0
// VOU ATRIBUIR PARA O MEU ONCLICK uma função que será chamada sempre que o usuário clicar no body
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('O evento aconteceu');
}