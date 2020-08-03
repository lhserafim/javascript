const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

// Vou criar uma funcionalidade para exibir o nome das tags
document.querySelectorAll('.tag').forEach(elemento => { // seleciono todos os elementos de classe css .tag
    const tagName = elemento.tagName.toLowerCase() // peguei o elemento e coloquei como minusculo

    elemento.style.borderColor = colors.get(tagName) // apliquei uma cor em cima da borda deste elemento

    if (!elemento.classList.contains('nolabel')) { 
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})