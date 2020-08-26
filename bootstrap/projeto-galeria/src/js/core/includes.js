// Utilizando o sistema de módulos do ECMA2015
import $ from 'jquery' // vai procurar o jquery dentro de node_modules e vou referenciar o jquery como $

// AULA: 358. Executando o Plugin
// Qual é o problema que temos para resolver aqui? 
//
// Quando eu incluo uma página HTML, a partir de uma requisição AJAX, obtida através da leitura de um atributo 
// personalizado wm-include, igual está no arquivo index.html, 
// QUANDO DENTRO DESTA PÁGINA, que eu estou tentando receber, temos a necessidade de executar um código JS
// este código NÃO É CHAMADO POR padrão. Eu tenho que ter alguma forma de interceptar isto


// SOLUÇÃO
// Criar um array de funções callbacks para serem chamadas quando as requisições forem bem sucedidas
// ou seja, assim que eu carregar uma página HTML de forma bem sucedida, eu vou chamar as funções que 
// estarão dentro deste array loadHtmlSuccessCallbacks, para que a partir destas funções eu consiga executar 
// alguma coisa logo depois que uma página foi carregada de forma bem sucedida
//
const loadHtmlSuccessCallbacks = []

// vou exportar a função
export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) { // Valido se a callback ja existe no array, se não , adiciono ao array
        loadHtmlSuccessCallbacks.push(callback)
    }
}

// Função que vai recuperar os parents dos atributos personalizados wm-include
function loadIncludes(parent) {
    // Usando o if reduzido
    if (!parent) parent = 'body' // se não tiver setado, seto como padrão o body

    $(parent).find('[wm-include]').each(function(i, e) { // retorna o index e o próprio elemento 
        const url = $(e).attr('wm-include') // pegando o atributo do elemento personalziado e colocando dentro do wrapper do jquery para ter acesso a todas as funções do jquery
        // Fazer a chamada ajax
        $.ajax({
            url,  // Passar como parametro a url
            success(data) { // função callback que eu quero que seja chamada quando a requisição for bem sucedida
                $(e).html(data) // Dentro do elemento atual, eu vou pegar o atributo html e setar o data dentro do html
                $(e).removeAttr('wm-include') // Excluir a propriedade para que não haja nenhuma reinterpretação dela
                
                // Invocando as callbacks, que foram aramazenadas no array, passando o atributo data que eu tenho
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                // chamando loadInclues novamente, pois é uma função recursiva
                // isto pq eu quero varrer o html e pegar os possíveis atributos filhos 
                loadIncludes(e)
            }
        })
    })
}

// Aqui é a primeira chamada do loadIncludes(), que vai sair executando e processando todos os demais
loadIncludes()