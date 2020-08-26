import $ from 'jquery' // para criar o plugin, eu preciso importar o jquery

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300 // definir o tempo de duração da animação das imagens

// Criar uma função para receber o nome das cidades e filtrar
function filterByCity(city) {
    $('[wm-city]').each(function (i, e) { // usando o $ para selecionar o atributo personalizado e aplicando um forEach chamando uma função
        // Se eu passar vazio no nome da cidade quero todas as cidades, se não quero só a cidade filtrada
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none') // estou removendo a classe para evitar o que ao filtrar as imagens as mesmas fiquem com buracos entre si
            $(this).fadeIn(duration) // fazendo a animação
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none') // aplicando a classe para que ele esconda
            })
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set // Estou usando o set, pq eu não quero repetições e assim só cria 1 botão p/ cada cidade
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => { // vou converter meu set (acima) para um array e fazer um map p/ transformar a city em um button
        const btn = $('<button>') // como estou passando os delimitadores de query <>, o jquery entende que tem que CRIAR o elemento
            .addClass(['btn', 'btn-info']).html(city) // add classe ao botao e o conteúdo do botão vai ser o nome da cidade (city)
        btn.click(e => filterByCity(city)) // este botão é que vai chamar a função de filtrar pela cidade
        return btn // retorna o botão para que de fato preencha o array
    })

    // Preciso ter um outro botão que represente todas as cidades.
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null)) // Ou seja, este botão é que vai passar nulo para a função filtrar e retornar todas as cidades
    btns.push(btnAll) // adicionando o btnAll para o array de botões, usando push

    // Criando um grupo de botões
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns) // apendar todos os botões neste grupo

    $(this).html(btnGroup) // adicionado ao html
    return this // eu faço isto para poder fazer o chain (encadear chamadas)
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})