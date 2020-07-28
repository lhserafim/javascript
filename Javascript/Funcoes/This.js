// Em Java, o this refere-se ao OBJETO (instancia)
// Ou seja, para uma Classe Aluno, que tenha Atributos nome e nota, o this vai referir-se ao objeto em memória

// Em JS o this PODE VARIAR!!
// Vai depender de como vc chama a função

// O This não varia em uma função arrow

// This e a função bind

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao); // o this vai acessar a saudacao de pessoa
    }
}

pessoa.falar(); // Se eu tirar o this, vai dar erro

// outro erro
const falar = pessoa.falar;
falar(); // assim vai dar undefined

// USANDO O BIND
// O BIND vc passa um objeto onde vc quer que seja resolvido o this

const falar2 = pessoa.falar.bind(pessoa);
falar2();

// Outros exemplos
// Para que o this nao varie, eu coloco o .bind(this) na funcao
function Pessoa2() {
    this.idade = 0;
    setInterval(function() {  
        this.idade++
        console.log(this.idade);
    }.bind(this),1000)  // Essa função setInterval dispara uma outra func a partir de um intervalo em milisegundos
}

//new Pessoa2 // comentei pra rodar o script abaixo

// Outra forma 
function Pessoa3() {
    this.idade = 0;
    const self = this;
    setInterval(function() {  
        self.idade++
        console.log(self.idade);
    },1000)  // Essa função setInterval dispara uma outra func a partir de um intervalo em milisegundos
}

new Pessoa3