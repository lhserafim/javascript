// Nada mais é do que processar o template string via função
// Pouco utilizado!

// Tagged templates

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'aprovado';
console.log(`${aluno} está ${situacao}.`); //Gui está aprovado.
console.log(tag `${aluno} está ${situacao}.`);
// [ '', ' está ', '.' ]
// [ 'Gui', 'aprovado' ]
// Outra string

console.log('---------------------')
// Outro exemplo
// Criando uma função que irá aplicar uma máscara de dinheiro a um valor
// isNaN -> is Not a Number
function real(partes, ...valores) {
    console.log('Partes:',partes);
    console.log('Valores:',valores);
    const resultado = []; // Criei um array vazio
    valores.forEach((valor, indice, teste, teste2) => { // Os parametros seguem a lógica do callback
        console.log('valor:',valor);
        console.log('indice:',indice);
        console.log('teste:',teste);
        console.log('teste2:',teste2);
        // Ao invés de usar IF fazendo ternária (tipo decode)
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`; // arredondando p/ 2 casas decimais
        // Adicionando elementos no array
        console.log('Antes do push:',partes,indice,valor)
        resultado.push(partes[indice],valor);
    })
    return resultado.join(''); // O join vai pegar todos os elementos deste array e gerar a string no final
    // usamos o espaço vazio para substituir unir, eu poderia usar outro caracter qualquer mas o mesmo seria
    // exibido no meio da string
}

const preco = 29.9
const precoParcela = 11
const precoParcela2 = 11.01
const precoParcela3 = 11.01
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`); // o que está dentro da crase é passado como parametro
//Partes: [ '1x de ', ' ou 3x de ', '.' ]
//Valores: [ 29.9, 11 ]