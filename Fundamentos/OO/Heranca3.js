// São todos functions
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// Por ser function, logo posso acessar o prototype e ADICIONAR atributos e métodos!
String.prototype.reverse = function() { // reverse não existe em String...estou adicionando
    // Para acessar os métodos dentro de String, Array, Object devo usar o this
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()); // Chamando a função criada em String

// SIMULAÇÀO DO OPERADOR NEW
console.log('SIMULAÇÀO DO OPERADOR NEW');
// Criando objetos usando a função construtora
function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new Aula('Video1', 8023482);
const aula2 = new Aula('Video2', 4023423);
console.log(aula1, aula2);

// simulando o new
// ... operador spread rest
function novo(f, ...params) { // recebe a função e conjunto de parametros
    const obj = {};
    obj.__proto__ = f.prototype; // vai apontar para o prototype da função que vem como param
    f.apply(obj, params) // param aqui é vetor
    return obj;
}

const aula3 = novo(Aula, 'Video1', 8023482);
const aula4 = novo(Aula, 'Video2', 4023423);
console.log(aula3, aula4);

