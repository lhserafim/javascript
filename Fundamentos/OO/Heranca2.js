// Quando vc cria um obj a partir de uma função construtora, este objeto tem o apontamento para funcao.prototype

function MeuObjeto() { };
console.log(MeuObjeto.prototype);

// Criando 2 instancias (objetos) do MeuObjeto
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__); // Validar se apontam p/ o mesmo obj pai -> true
// Quando vc cria um obj, a partir de uma função construtora, usando o new o objeto desta função automaticamente
// aponta para a função construtora
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
};
obj1.falar();
obj2.nome = 'Luiz';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Fazendo a herança
obj3.falar();

// Algumas verdades
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);