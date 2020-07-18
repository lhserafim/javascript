// O JS tem mais valores do que apenas true e false

// TRABALHANDO COM O PADRÃO TRUE e FALSE
let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);

// DEFININDO VALORES P/ TRUE E FALSE
isAtivo = 1;
console.log(!!isAtivo); // Necessário negar 2 vezes

// Os verdadeiros
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

// Os falsos
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN); // Not a Number
console.log(!!undefined);

// Fazendo TIPO UM NVL no JS
let nome = '';
nome = nome || 'Luiz Serafim'; // Vai substituir o null pela string
//console.log(nome || 'Luiz Serafim');
console.log(nome);