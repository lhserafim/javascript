// Algumas particularidades do JS com relação a var

// ESCOPO pode ser GLOBAL ou a nível de FUNÇÃO
// Uma variável pode ser acessada, mesmo fora do seu bloco do seu escopo. Ela é GLOBAL

{
    {
        {
            var sera = 'Será?';
        }
    }
}

console.log(sera);

// Porém dentro de uma function, ela fica restrita ao escopo da função 
function variavel() {
    var texto = "Teste!!";
    console.log(texto);
};

variavel();

console.log(texto); // isso dá erro!!

