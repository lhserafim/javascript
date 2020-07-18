const contadorA = require('./InstanciaUnica');
const contadorB = require('./InstanciaUnica');

/**
 * Aqui estou colocando o () pois este require retorna uma FUNÇÃO e para acessar o objeto que representa o 
 * contador inc() preciso acrescentar o () após o require 
 */
const contadorC = require('./InstanciaNova')();
const contadorD = require('./InstanciaNova')();

/**
 * Agora repare o seguinte, vou usar só o contadorA, e mesmo assim o valor do contadorB será incrementado
 * Isto acontece porque o node faz cache
 */

 contadorA.inc();
 contadorA.inc();
 console.log(contadorB.valor);

 /**
  * O comportamento quando usamos uma factory é diferente, ele faz a instanciação do objeto, portanto o valor 
  * é por objeto (instancia)
  */
 contadorC.inc();
 contadorC.inc();
 console.log(contadorD.valor);

 console.log(contadorC.valor);
