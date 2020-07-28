const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'João',
        nota: 7.2
    }]
},{
    nome: 'Turma 2',
    alunos: [{
        nome: 'Marcio',
        nota: 9.1
    },{
        nome: 'Zeca',
        nota: 6.2
    }]    
}];

// Quero extrair todas as notas, independente da turma
const getNotaAluno = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);
const notas1 = escola.map(getNotaTurma);
console.log(notas1);
// Isso gerou um array com 2 arrays (1 por turma)
// o FlatMap vai gerar um único array

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([],this.map(callback));
}

const notas2 = escola.flatMap(getNotaTurma);
console.log(notas2);
