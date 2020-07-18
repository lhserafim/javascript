// REVISÃO
// Objetos é uma coleção dinâmica de pares chave/valor
console.log(typeof Object); // Object é uma função!!
const produto = new Object; 
produto.nome = 'Cadeira'; // Adicionando o par chave valor de forma dinâmica
produto['fabricante do produto'] = 'McKein'; // Evitar usar esta notação
produto.preco = 220;
console.log(produto['fabricante do produto']);
console.log(produto);
delete produto.preco;  // Posso remover atributos de forma dinâmica
console.log(produto);

// Criando um objeto mais complexo, contendo outros objetos e arrays
const carro = {
    modelo: 'C4',
    fabricante: 'Citroen',
    proprietario: {
        nome: 'Luiz Henrique',
        dataNascimento: '09/02/1983',
        endereco: {
            logradouro: 'Av. Paulista',
            numero: 1000
        }
    },
    condutores: [{
        nome: 'Jane',
        idade: 56
    },{
        nome: 'Daniela',
        idade: 30
    }],
    temSeguro: function() {
        const seguroAtivo = true;
        return seguroAtivo;
    }
}
console.log(typeof carro);
console.log(carro.condutores,carro.temSeguro());
carro.fabricante = 'CITROEN';
console.log(carro.fabricante);
carro.condutores = [{ // Necessário passar o vetor completo, caso contrário vai tirar elementos
    nome: 'Daniela',
    idade: 30
},{
    nome: 'Carol',
    idade: 32
}];

console.log(carro);

// ESTRATÉGIA DE CRIAÇÃO DE OBJETOS
console.log('ESTRATÉGIA DE CRIAÇÃO DE OBJETOS');
// A notação literal PARECE JSON mas não é!

// Usando notação literal
const obj1 = {nome: 'Valor'}; // aqui dentro os atributos
console.log(obj1);

// Object em JS
// Usando new Object()
const obj2 = new Object({
    nome: 'Valor'
});
console.log(obj2);

// Funções construtoras
function Produto(nome, preco) {
    this.nome = nome; // Escopo global
    let valor = preco; // Escopo de função
    let valor2 = preco; // Escopo de função
    this.getValor2 = () => { // Criando o getter p/ pegar um atributo privado
        return valor2;
    }
    this.getValor2b = function() {
        return valor2;
    }
}
const obj3 = new Produto('Valor',10.00);
console.log(obj3, obj3.getValor2(), obj3.getValor2b());

// Função factory
function criarAlgo(nome) {
    return {
        nome
    }
}

const obj4 = criarAlgo('Valor');
console.log(obj4);

// Object.create
const obj5 = Object.create(null);
obj5.nome = 'Valor';
console.log(obj5);

// Criando a partir de um JSON
const obj6 = JSON.parse('{"nome": "Valor"}');
console.log(obj6);

console.log(typeof obj1,typeof obj2,typeof obj3, typeof obj4, typeof obj5, typeof obj6);

// Informações adicionais.
// Porque eu "posso" alterar um valor de constante?
// Na verdade é assim, quando eu crio uma constante e atribuo um valor a ela, como um objeto, eu estou atribuindo
// um ENDEREÇO DE MEMÓRIA. Quando eu altero o conteúdo do objeto, eu NÃO ESTOU MEXENDO no apontamento para o 
// end de memória, mas sim no objeto que está dentro deste endereço.
// Caso eu queira transformar o objeto, que está neste endereço, como constante, devo usar o comando freeze.

// Exemplo
const objConstante = {nome: 'Luiz'}; //Object.freeze({nome: 'Luiz'});
console.log(objConstante);

objConstante.nome = 'Luiz Henrique'; // Permitiu alterar o obj
console.log(objConstante);

Object.freeze(objConstante);
objConstante.nome = 'Luiz Henrique SS'; // Não vai deixar alterar
console.log(objConstante);
