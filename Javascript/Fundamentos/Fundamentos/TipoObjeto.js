// Criando um objeto vazio
const prod1 = {} ; // Par de chaves, significa que é um objeto

// Adicionando DINAMICAMENTE atributos ao objeto
// O JS aceita nome de atributos com espaço. NÃO USAR!
prod1.nome = "Celular Ultra Mega Poderoso";
prod1.preco = 49800.00;

console.log(prod1); // { nome: 'Celular Ultra Mega Poderoso', preco: 49800 }

const prod2 = {
    nome: "Luiz Serafim", 
    idade: 37,
    filho: 
        [{
            nome: "Thiago",
            idade: 2},
        {
            nome: "Alice",
            idade: 1
        }]
};

console.log(prod2);

const prod3 = {};
prod3.nome = "Caneta";
prod3.preco = 10;
console.log(prod3);
delete prod3.preco; // excluir dinamicamente um atributo de um objeto
console.log(prod3); 