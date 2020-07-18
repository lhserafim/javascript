// ECMAScript 2015
// Classe só é uma forma diferente de escrever uma função em JS
// Classes não acrescentam muita coisa em JS. Pois ela é muito similar a funções construtoras. 
// Na maior parte do tempo vamos trabalhar com func. construtoras
// Talvez quando estiver usando REACT

const { timeStamp } = require("console");

class Lancamento {
    // Construtor - Similar ao JAVA
    constructor(nome = 'Genérico', valor = 0) { // Criando uma classe com valores default no construtor
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinancero {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    // recebendo parametros, similar ao Vararg
    addLancamentos(...parametros) {
        // Estou percorrendo cada elemento de parametros (com for each) e adicionando ao array lancamentos
        parametros.forEach(l => this.lancamentos.push(l));
    }
    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor; // repare que o valor vem da outra classe (Lancamento)
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario',45000);
const contaLuz = new Lancamento('Luz', -220);

const contas = new CicloFinancero(6, 2018);
contas.addLancamentos(salario, contaLuz); // eu pude passar 2 argumentos, pois usei ...parametros

console.log(contas.sumario());


