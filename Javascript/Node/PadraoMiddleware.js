/**
 * Padrão de projeto Middleware ou chain of responsability
 * É uma forma de aumentar a reusabilidade do código
 * Ao invés de você ter um objeto com várias funções dentrou, ou 
 * funções independentes que explicitamente chamam as próximas, 
 * você pode usar o conceito de middleware e passar a um "terceiro" a responsabilidade de chamar as 
 * funções independentes na ordem desejada
 */

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'; 
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'; 
    next();
}

const passo3 = (contexto) => { // o next é opcional
    contexto.valor3 = 'mid3'; 
}

// Agora vou criar a função que vai chamar as 3 funções acima
const exec = (contexto, ...middlewares) => { // usando o rest (...) que é igual o varargs
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0);
}

const ctx = {};
exec(ctx, passo1, passo2, passo3);
console.log(ctx);