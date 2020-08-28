// Aula 369. Componente Calculator

import React, { Component } from 'react'
import './Calculator.css' // O arquivo .css não precisa ser from alguma coisa

import Button from '../components/Button' // Aula 370. Componente Button #01
import Display from '../components/Display' // Aula 371. Componente Display

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
                {/* Aula 371. Componente Display */}
                <Display value={100}/>
                {/* Aula 370. Componente Button #01 */}
                <Button label="AC"/>
                <Button label="/"/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*"/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-"/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
                <Button label="0"/>
                <Button label="."/>
                <Button label="="/>
            </div>
        )
    }
}