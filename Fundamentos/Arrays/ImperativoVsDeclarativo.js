const alunos = [
    {nome: 'João', nota: 7.4, bolsista: false},
    {nome: 'Maria', nota: 9.4, bolsista: true},
    {nome: 'Pedro', nota: 9.2, bolsista: false},
    {nome: 'Ana', nota: 8.4, bolsista: true}
]

// Imperativo
// No imperativo o COMO é mais importante do que o O QUE será feito
// é a execução passo a passo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}

// Soma e Média
console.log(total1, total1/alunos.length);

// Declarativo 
// Essa abordagem é + Interessante
// Este permite reuso, pois criei funções 
// no declarativo é o contrário do imperativo. Você diz o que precisa ser feito e INTERNAMENTE as coisas são feitas
const getNota = a => a.nota;
const soma = (acc, valor) => acc + valor;
const total2 = alunos.map(getNota).reduce(soma);
// Soma e Média
console.log(total2, total2/ alunos.length);

// O HTML e o SQL são linguagens DECLARATIVAS. Não me preocupo como os dados são selecionados só pesso para ele selecionar