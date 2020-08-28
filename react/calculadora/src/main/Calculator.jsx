// Aula 369. Componente Calculator

import React, { Component } from 'react'
import './Calculator.css' // O arquivo .css não precisa ser from alguma coisa

import Button from '../components/Button' // Aula 370. Componente Button #01
import Display from '../components/Display' // Aula 371. Componente Display

// Utilizando a exportação padrão do ECMAscript 2015
export default class Calculator extends Component {
    // Aula 372. Componente Button #02

    // Resolvendo o problema do this
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    
    // Criando as funções que vão serão chamadas de acordo com o botão clicado
    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

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
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}