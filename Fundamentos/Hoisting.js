console.log('a = ', a);
var a = 2; // Mesmo criando a variável abaixo do seu primeiro uso, o JS faz o hoisting, ou seja joga p/ cima
console.log('a = ', a);

// Resultado 
//a =  undefined
//a =  2

// HOISTING só funciona para var