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