// Duas formas de chamar função em JS
// Call e Apply

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

// Criando um objeto
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // também poderia chamar assim: getPreco: getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // Chamando a função diretamente (preciso passar os valores do this)
console.log(produto.getPreco()); // Chamando a função a partir de um objeto (os valores do this, vem do contexto)

// Outras duas formas que eu teria para acessar esta função é com Call e Apply
console.log(getPreco.call(produto));
console.log(getPreco.apply(produto));

// A diferença é só a passagem dos parametros
console.log(getPreco.call(produto,0.17,'$'));
console.log(getPreco.apply(produto,[0.17,'$'])); // Os parametros precisam ser via array