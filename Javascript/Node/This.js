console.log(this === global); // false - this aponta para module.exports
console.log(this === module.exports); // true;

function logThis() {
    console.log('Dentro de uma função o this NÃO APONTA PARA module.exports e sim para a global');
    console.log(this === module.exports); // false
    console.log(this === global);// true; // Ou seja, aqui estou transformando em algo público!
}

logThis();