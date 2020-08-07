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

const b = new ParDeBarreiras(500, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)