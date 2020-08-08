/* Os parâmetros de uma função são chamados de argumentos da função. 
   Argumentos são passados para a função por valor. Se uma função muda o valor de um argumento, 
   esta mudança não é refletida globalmente ou na chamada da função. Contudo, referência de objetos são valores também, 
   e eles são especiais: se a função muda as propriedades do objeto referenciado, estas mudanças são visíveis fora da função, 
   como é mostrado no exemplo a seguir: 
*/

/* Declare a função 'minhaFunção' */
function minhaFuncao(objeto) {
    console.log('typeof objeto: ', typeof objeto) // recebeu o parametro como um objeto
    objeto.modelo = "Civic";
  }
  
  /*
   * Declare a variável 'meucarro';
   * crie e inicialize um novo Objeto;
   * atribua referência para 'meucarro'
   */
  let meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
  };
 
  /* Exibe 'Honda Accord' */
  console.log(meucarro.marca, meucarro.modelo);
 
  /* Passe a referência do objeto para a função */
  minhaFuncao(meucarro);
 
  /*
   * Exibe 'Honda Civic' como valor para a propriedade 'marca'
   * do objeto, mudado pela função.
   */
  console.log(meucarro.marca, meucarro.modelo);

let valor = 10;
console.log('Valor inicial: ', valor);

function minhafuncao2(valor) {
    valor = 20;
    console.log('Valor dentro da função: ', valor);
}

minhafuncao2(valor);

console.log('Valor final, fora da função', valor);
