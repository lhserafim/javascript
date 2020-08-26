// Utilizando o sistema de módulos do ECMA2015
import $ from 'jquery' // vai procurar o jquery dentro de node_modules e vou referenciar o jquery como $

// Função que vai recuperar os parents dos atributos personalizados wm-include
function loadIncludes(parent) {
    // Usando o if reduzido
    if (!parent) parent = 'body' // se não tiver setado, seto como padrão o body

    $(parent).find('[wm-include]').each(function(i, e) { // retorna o index e o próprio elemento 
        const url = $(e).attr('wm-include') // pegando o atributo do elemento personalziado e colocando dentro do wrapper do jquery para ter acesso a todas as funções do jquery
        // Fazer a chamada ajax
        $.ajax({
            url,          // Passar como parametro a url
            success(data) { // função callback que eu quero que seja chamada quando a requisição for bem sucedida
                $(e).html(data) // Dentro do elemento atual, eu vou pegar o atributo html e setar o data dentro do html
                $(e).removeAttr('wm-include') // Excluir a propriedade para que não haja nenhuma reinterpretação dela
                
                // chamando loadInclues novamente, pois é uma função recursiva
                // isto pq eu quero varrer o html e pegar os possíveis atributos filhos 
                loadIncludes(e)
            }
        })
    })
}

// Aqui é a primeira chamada do loadIncludes(), que vai sair executando e processando todos os demais
loadIncludes()