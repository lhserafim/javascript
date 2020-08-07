// Implementar JS para usar no HTML

// Função para criar novos elementos dinâmicamente
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName) // Criando um elemento a partir do nome da tag
    elem.className = className // Adidicionando uma classe a este elemento. Também poderia usar o classList.add
    return elem
}

// Função para criar as barreiras
function Barreira(reversa = false) {
    // Adicionando direto na DOM
    this.elemento = novoElemento('div', 'barreira') // chamando a função para criar elementos dinamicamente

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    // A regra abaixo é para definir a orientação da barreira
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    
    // Essa função (método) é um construtor e eu quero ter uma função para eu facilmente alterar a altura da barreira
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// TESTE
// const b = new Barreira(true) // instanciando a function como se fosse um objeto
// console.log(typeof b); // object
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    // Quando você coloca this.algumaCoisa dentro de uma função construtura, aquele atributo passa a ser
    // visível fora da função. Ou seja, a partir do momento que eu instancio este construtor, eu posso
    // acessar seus atributos "publicos (this)". Se eu criar como const ou let ficariam privados
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // Função para criar as barreiras em alturas aleatórias
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    // Recuperar a posição X da barreira
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    // Alterando o X a partir da posição X que foi passada
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(500, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

// Criando uma função construtora
// As barreiras, inicialmente, estarão fora da área do jogo
// O passarinho fica fixo, no centro da tela e as barreiras que se movimentam. Estarei trabalhando com 4 barreiras, em loop
function Barreiras(altura, largura, abertura, espaco, notificarPonto) { // o parametro notificarPonto é uma função
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // Quando o elemento sair da área do jogo, calcular e colocá-lo do outro lado da tela para aparecer novamente
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            // Verificar se barreira cruzou o meio, se sim, pontuar
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            // Uma forma de fazer um if (reduzido)
            // Se cruzouOMeio (verdadeiro) executar o notificarPonto()
            // se cruzouOMeio (falso) não vai executar a segunda parte
            cruzouOMeio && notificarPonto() // igual a fazer isso:  if (cruzouOMeio) notificarPonto
            
        })
    }
}

const barreiras = new Barreiras(500, 1200, 200, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
}, 20)