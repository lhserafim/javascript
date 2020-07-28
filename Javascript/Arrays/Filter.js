// É uma forma p/ filtrar o array
// Sempre que precisar filtrar, usar o filter (ao invés do forEach)

const produtos = [
    {nome: 'Notebook', preco: 7242.00, fragil: true},
    {nome: 'iPad', preco: 2342.00, fragil: true},
    {nome: 'Copo de vidro', preco: 12.00, fragil: true},
    {nome: 'Copo de plástico', preco: 2.00, fragil: false}
]

console.log(produtos.filter(function(p) { // p é cada um dos elementos do array
    // Forma mais verbosa. Retorna os objetos e seus atributos
    // if (p.fragil == true) {
    //     return this; // ou return p;
    // }
    return p.fragil == true && p.preco >= 500.00; // forma mais enxuta
}));

// Também posso fazer concatenando funções
const caro = p => p.preco >= 500.00;
const fragil = p => p.fragil == true;

console.log(produtos.filter(caro).filter(fragil));