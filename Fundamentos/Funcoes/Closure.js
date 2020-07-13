// Exemplo de contexto léxico 
const local = 'Global';

function minhaFunc() {
    console.log(local);
}

function exec() {
    const local = 'Local';
    minhaFunc();
}

exec(); // Por causa do contexto lexico, a variável local que será usada é a declarada externamente 
// A função carrega com sigo o lugar onde ela foi definida


// Closure é o escopo onde a função foi declarada (contexto léxico)
// Esse escopo permite a função acessar e manipular variáveis externas a função (vide exemplo no arquivo ContextoLexico)

// Contexto léxico em ação
const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

// EXPLICANDO. As funções em JS tem "memória" dos locais onde elas foram declaradas. Por isso elas podem usar 
// variáveis declaradas fora do contexo da função mas dentro do contexto léxico