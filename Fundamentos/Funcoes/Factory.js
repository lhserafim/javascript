// Função Factory
// Factory é um conceito de PADRÃO DE PROJETO (assim como observer)

//Factory é uma função que retorna um objeto
// Sempre vai estar criando uma nova instancia
function criarPessoa() {
    return {
        nome: "Luiz",
        sobrenome: "Serafim"
    }
}

// Vai criar uma nova instancia de pessoa
console.log(criarPessoa());

function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Caneta',10));