// Aula 371. Componente Display
import React from 'react'
import './Display.css'

// Conforme dica da aula 370, priorizar o uso de componentes funcionais
export default props => 
    <div className="display">{props.value}</div>