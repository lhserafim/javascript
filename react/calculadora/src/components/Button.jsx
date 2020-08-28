// Aula 370. Componente Button #01

import React from 'react'
import './Button.css' // Assim como no exemplo anterior, importo o css que é "par" do arquivo jsx

// DICA
// Sempre que possível, priorize o uso de componentes SEM ESTADO (STATE), pois este são mais faceis de manipular
export default props =>
<button className="button">{props.label}</button> // Recebe o parâmetro (props) label, do botão do calculator.jsx