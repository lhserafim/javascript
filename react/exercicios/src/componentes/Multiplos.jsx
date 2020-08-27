import React from 'react'

// Aqui a exportação não está sendo feita com default!
// Quando eu exporto um default, não preciso passar const, let ou var!

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// Neste exemplo eu tenho 2 componentes sendo exportados a partir deste aquivo