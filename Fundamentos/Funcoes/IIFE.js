// Função AUTO INVOCADA
// IIFE -> Immediately Invoked Function Expression
// Ajuda a evitar manipular coisas dentro do escopo global do navegador

// O Escopo Global no navegador é o Window
// Portanto é uma forma de fugir do escopo global
// uma das formas de fazer isso é usando uma função auto invocada


// é uma função anomima e deve ser declarada dentro de parenteses
(function() {
    // Ou seja, se eu criar var, let, const, aqui dentro, ficará apenas neste escopo
    console.log('Será executado na hora!');
    console.log('foge do escopo mais abrangente');
})(); // este parenteses invoca a func anonima



