// JSON -> JAVA SCRIPT OBJECT NOTATION
// JSON Foi criado para facilitar a interoperabilidade entre sistemas
// JSON nada mais é do que uma troca de arquivo textual, contendo chaves e valores

// Converter um objeto p/ JSON
const obj = {
    a: 1,
    b: 2, 
    c: 3,
    soma() {
        return a + b + c;
    }
}

// Convertendo.. OBJETO -> JSON
// Note que a função é excluída, pois o JSON é um formato de dados
console.log(JSON.stringify(obj));

// Convertendo.. JSON -> OBJETO
console.log(JSON.parse('{"a":1,"b":2,"c":3}'));
console.log(JSON.parse('{"a":1.7, "b":"string", "c": true, "d": {}, "e":[] }'))