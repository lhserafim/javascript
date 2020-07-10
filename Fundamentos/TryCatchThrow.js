// Try Catch Throw

// Vou criar um código com um erro no nome da variável 

// Criando uma constante do tipo objeto
// Como estou passando um conjunto de chaves para uma constante, eu transformo ela em objeto
const obj = {nome: 'Roberto'};

console.log(typeof obj); // object
console.log(obj.nome);


// O comportamento do try catch finally é similar ao java
function imprimirNomeCaixaAlta(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErro(e);
    } finally {
        console.log('fim!');
    }
}

function tratarErro(erro) {
    //throw new Error('....');
    // Posso lançar qualquer coisa ex.:
    //throw 10;
    //throw 'Mensagem';
    // lançando objeto
    throw { 
        name: erro.name,
        msg: erro.msg,
        date: new Date()
    }
}

imprimirNomeCaixaAlta(obj);