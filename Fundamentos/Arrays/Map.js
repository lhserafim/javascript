// A função map é igual ao JAVA
// Ela transforma os dados do array, gerando outro array com o mesmo número de elementos, sem modificar o array original

const nums = [1, 2, 3, 4, 5];

let resultado = nums.map(function(e) { // vou usar só o primeiro elemento da callbackfn, que é o value
    return e * 2;
})

console.log(nums);
console.log(resultado);

// posso concatenar várias chamadas .map
const soma10 = e => e + 10;
const vezes2 = e => e * 2;
const divide2 = e => e / 2;

resultado = nums.map(soma10).map(vezes2).map(divide2);

console.log(resultado);

// Desafio
const carrinho = [
    '{"nome": "Borracha", "preco": 7.45}',
    '{"nome": "Caneta", "preco": 2.5}',
    '{"nome": "Lápis", "preco": 1.4}',
    '{"nome": "Caderno", "preco": 17.00}'
]

//console.log(JSON.parse('{"nome": "Borracha", "preco": 7.45}'));
// Retornar um array apenas com os preços

// 1 converti usando map, de JSON p/ object, 
// depois ainda usando map, fiz uma função para percorrer os elementos e pegar o preço. Fiz desta forma pois era um vetor
// Se não, poderia acessar diretamente o atributo preço
console.log('Pegando só o valor dos produtos: ', carrinho.map(JSON.parse).map(e => e.preco));