// Object.preventExtensions
// Utilizando esta opção, nenhum atributo pode ser adicionado ao objeto. Apenas a deleção é permitida

const produto = Object.preventExtensions({
    nome: 'Caneta',
    preco: 10.00,
    tag: 'papelaria'
})

console.log('Extensivel: ', Object.isExtensible(produto)); // false

// Alterando
produto.nome = 'Borracha'; // Permite atualizar o dado
produto.preco = 2.00;
produto.cor = 'branca'; // Não será adicionada, por causa da preventExtensions
console.log(produto);

delete produto.tag; // Exclusão é permitida
console.log(produto);

// Object.seal
// Utilizando esta opção, nenhuma alteração nos atributos será permitida, nem adição nem remoção
// Os valores podem ser alterados
const pessoa = {
    nome: 'Luiz',
    idade: 37
}

Object.seal(pessoa);
console.log(Object.isSealed(pessoa));
pessoa.nome = 'Luiz Henrique';
pessoa.sobrenome = 'Serafim';
delete pessoa.nome;
console.log(pessoa);

// Object.freeze 
// "Trava tudo" transforma em uma constante
Object.freeze(pessoa);
console.log(Object.isFrozen(pessoa));
pessoa.idade = 40; // Não permite nem alterar o dado
Object.freeze(pessoa);
