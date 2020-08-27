import React from 'react'

// Sem parametro
//export default () => <h1>Bom dia Fulano!</h1>

// com parametro
// por padrão chamamos os parametros passados de props (mas poderia ser qualquer nome X , Y , Z)
//export default props => <h1>Bom dia {props.nome}</h1>  // nome é o parametro passado no arquivo index.js

// Se eu quiser passar mais do que uma tag, preciso envolver em uma <div>, <React.Fragment> ou até um array []
export default props => 
<React.Fragment>
    <h1>Bom dia {props.nome}</h1>
    <h2>Sua idade é: {props.idade}</h2>
</React.Fragment>
