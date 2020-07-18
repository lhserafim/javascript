// Variáveis do tipo let, podem ter 3 ESCOPOS:
// Global, de Bloco ou de função

let numero = 5;

{
    {
        {
            let numero = 10;
            console.log('Dentro: ' + numero); // Vai pegar a variável mais próxima
        }
    }
}

console.log('Fora: ' + numero);
