for (var i = 0; i < 10; i ++ ) {
    console.log(i);
}

// Como var foi criado dentro de um bloco, o escopo vira GLOBAL
console.log(i);

console.log('let.....');

for (let x = 0; x < 10; x ++ ) {
    console.log(x);
}

// O let não permite que a variável seja encontrada fora do bloco, pois o escopo foi de bloco
console.log(x); // Erro
