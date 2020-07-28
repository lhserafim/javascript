// Ao contrário do JAVA, onde o array tem tamanho FIXO, o JS permite que o tamanho do array seja alterado

// Posso declarar o array de diversos tipos
const valores = [3.2, 4.1, 4, 8.2];
console.log(valores[0]);
console.log(valores[100]); // Não dá erro, apenas retorna que é undefined
console.log(valores);

valores[100] = 1000;
console.log(valores); // [ 3.2, 4.1, 4, 8.2, <96 empty items>, 1000 ]
console.log(valores.length);

// Diferente de outras linguagens, o array no JS é hetereogeneo
valores.push({id: 3}, false, true, 'texto'); // adicionar valores ao array. Adidicinado de tipos diferentes
console.log(valores);

// Tirar o ultimo valor do array
console.log(valores.pop());
delete valores[0];
console.log(valores);

// em JS um array é do tipo object