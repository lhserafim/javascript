// Em JS o array é um objeto!!
// Em JS o array é uma estrutura hetereogenea, ou seja, permite diferentes tipos dentro dele
// Seu tamanho tmb é variável

console.log(typeof Array, typeof new Array(), typeof []); // [] array literal

// Forma menos recomendada de criar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana', 'Daniela', 'Luiz', 'Carolina');
console.log(aprovados);

// Criando um array com a notação literal + recomendado
let aprovados2 = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0], aprovados[9]); // Quando o valor é fora do indice, ele retorna undefined

// Adicionando um elemento dentro do array
aprovados2.push('Daniela');
console.log(aprovados2.length);

// Também posso adicionar um elemento diretamente na posição
aprovados2[9] = 'Luiz';
console.log(aprovados2);

aprovados2.sort(); // Vai ordernar o array, vai causar a alteraçao no array original
console.log(aprovados2);

// Deletar
delete aprovados2[2];
console.log(aprovados2);

// Splice permite excluir e adicionar elementos ao mesmo tempo
aprovados.splice(1,2); // A partir do indice 1, deletar 2 
//[(]'Bia', 'Carlos', 'Ana', 'Daniela', 'Luiz', 'Carolina'];
console.log(aprovados);

aprovados.splice(1,0, 'Jane', 'Antonio' ); // A partir do indice 1, deletar 0, adicionar 2 elementos
// [ 'Bia', 'Daniela', 'Luiz', 'Carolina' ]
console.log(aprovados);

const pilotos = ['Vettel', 'Alonso', 'Kyviat', 'Leclerc', 'Latifi'];
pilotos.pop(); // Remove o último item do array
pilotos.shift(); // Remove o primeiro item do array
console.log(pilotos);

// Adicionar...
pilotos.push('Hamilton'); // Adiciona ao final
pilotos.unshift('Senna'); // Adiciona ao início do array
console.log(pilotos);
pilotos.splice(1,0,'Verstappen'); // A partir da posição 1, remover 0, adicionar 'Verstapen'
console.log(pilotos);
const pilotosAtuais = pilotos.slice(1,5); // Trabalha como um substring, não pega o elemento de indice 5
console.log(pilotosAtuais);