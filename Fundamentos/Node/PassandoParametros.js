/** 
 * Estou exportando a função abaixo, através do module.exports
 * Note que a função recebe um array de nomes (estilo varargs)
 * Para cada nome, faço uma saudação, usando map
*/
module.exports = function(...nomes) {
    return nomes.map(nome => `Bom dia ${nome}!`);

}