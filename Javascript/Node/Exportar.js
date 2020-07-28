// this é uma referencia p/ o module.exports
console.log(module.exports === this); 

// Algumas formas de exportar as variáveis
this.ola = 'Fala pessoal';
exports.bemVindo = 'Bem vindo';
module.exports.ateLogo = 'Até logo';

exports = null; // Isso não vai alterar o module.exports
console.log(module.exports);

module.exports = {
    publico: true // agora mudou
}
console.log(module.exports);
