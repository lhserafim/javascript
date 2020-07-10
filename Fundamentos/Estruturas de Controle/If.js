// O If tem a mesma estrutura do JAVA

function validaNotaAluno(nota) {
    if (nota >= 7) {
        console.log('Aprovado');
    } else if (nota >= 3 && nota < 7 ) {
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}

validaNotaAluno(7);
validaNotaAluno(3);
validaNotaAluno(1);