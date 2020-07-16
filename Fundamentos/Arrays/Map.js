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