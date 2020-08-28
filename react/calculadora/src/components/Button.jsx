// Aula 370. Componente Button #01

import React from 'react'
import './Button.css' // Assim como no exemplo anterior, importo o css que é "par" do arquivo jsx

// DICA
// Sempre que possível, priorize o uso de componentes SEM ESTADO (STATE), pois este são mais faceis de manipular
export default props =>
//<button className="button">{props.label}</button> // Recebe o parâmetro (props) label, do botão do calculator.jsx

// Aula 372. Componente Button #02
// Aplicando a classe de forma dinâmica, de acordo com o que vem de parâmetro. Usando uma condição ternária, decido se aplico a classe
// Dentro do template string, estou aplicando JS puro por isso estou usando jQuery
<button 
    onClick={e => props.click && props.click(props.label)} // Retornando o conteúdo do botão
    className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}    
`}>
    {props.label}
</button>

// Versão 2 - é a mesma coisa da de cima, só escrito diferente
// export default props => {
//     let classes = 'button '
//     classes += props.operation ? 'operation' : ''
//     classes += props.double ? 'double' : ''
//     classes += props.triple ? 'triple' : ''
    
//     return (
//         <button 
//             onClick={e => props.click && props.click(props.label)}
//             className={classes}>
//             {props.label}
//         </button>
//     )
// }