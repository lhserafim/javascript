const filhosA = ['Filho 1','Filho 2', 'Filho 3'];
const filhosB = ['Filho 4','Filho 5', 'Filho 6'];
const todos = filhosA.concat(filhosB);
console.log(todos); // concatena elementos, sem alterar as origens

// 8,9 é uma matriz
console.log([].concat([1,2],[3,4],5, 6, [[8,9]]));

