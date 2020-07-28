const sequence = {
    _id: 1, // convenção _ para dizer que é uma variável interna
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto; // atribuição chave valor
    return produto;
}

function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

function getProduto(id) {
    return produtos[id] || {};
}

function getProdutos() {
    return Object.values(produtos);
}

// Como é node, vou exportar, tornar visível as funções
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto};