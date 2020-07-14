// ECMAScript® 2015
// Melhorias na notação literal

const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c}; // Passando atributo e alias
const obj2 = {a, b, c}; // Já assume que o alias tem o mesmo nome do atributo ECMA2015
console.log(obj1, obj2);

// Transformando constantes em objetos
const nomeAttr = 'nota';
const valorAttr = 7.8;
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

// ECMA2015
const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

// Funções
const obj5 = {
    funcao1: function() {
        return true;
    },
    funcao2() { // ECMA2015
        return true;
    }
}
console.log(obj5);
console.log(obj5.funcao2());