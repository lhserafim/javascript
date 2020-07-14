// A forma que o JS defini herança é um objeto fazendo referencia para seu protótipo, que 
// pode possuir atributos e comportamentos que podem ser acessados pelo seu objeto filho

// Criando objetos pela notação literal
const ferrari = {
    modelo: 'F40',
    velMax: 320
}

const volvo = {
    modelo: 'V40',
    velMax: 220
}
// __proto__ é para referenciar para o "pai"
console.log(ferrari.__proto__); // {} 
console.log(ferrari.__proto__ === Object.prototype); //true 
// Aqui vale uma observação, ele só é true pq foi criado pela notação literal, se criar por funçao construtora será falso

// Cadeia de herança.. prototype chain