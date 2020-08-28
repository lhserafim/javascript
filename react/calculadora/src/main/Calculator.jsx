// Aula 369. Componente Calculator

import React, { Component } from 'react'
import './Calculator.css' // O arquivo .css não precisa ser from alguma coisa

// Utilizando a exportação padrão do ECMAscript 2015
export default class Calculator extends Component {
    render() {
        return (
            // IMPORTANTE!
            // Ao invés de class, usamos className como nome de classe dentro do JSX, pois:
            // 1. Evita conflito com a classe (class)
            // 2. Pq apesar de ser um elemento HTML, este trecho de código é um JSX e não um HTML
            // 3. O react faz o transpile deste código para JS
            <div className="calculator"> {/*Esta className é referenciada em Calculator.css*/}

            </div>
        )
    }
}