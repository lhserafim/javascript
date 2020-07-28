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