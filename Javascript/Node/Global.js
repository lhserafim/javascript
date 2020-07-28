
// Eu posso alterar o conteúdo da global
// Em cenários de EXCEÇÃO eu posso alterar

global.MinhaApp = {
    saudacao() {
        return 'Meu Aplicativo';
    },
    nome: 'Meu app versão 2.0'
}

console.log(global)
// Uma vez alterado, posso acessar em outros módulos
