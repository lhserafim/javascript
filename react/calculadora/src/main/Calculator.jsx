// Aula 369. Componente Calculator

import React, { Component } from 'react'
import './Calculator.css' // O arquivo .css não precisa ser from alguma coisa

import Button from '../components/Button' // Aula 370. Componente Button #01
import Display from '../components/Display' // Aula 371. Componente Display

// Aula 373. Implementando a Lógica #01
// Criar um objeto dentro de uma constante para possibilitar manipular o COMPORTAMENTO desta calculadora
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

// Utilizando a exportação padrão do ECMAscript 2015
export default class Calculator extends Component {

    state = { ...initialState} // Fazendo uma operação spread, para definir qual é o estado inicial da calculadora, conforme armazenado em constante
    
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
        //console.log('limpar')
        // Aula 373. Implementando a Lógica #01
        this.setState({ ...initialState }) // ao clicar, voltar para o estado inicial 
    }

    setOperation(operation) {
        //console.log(operation)
        //Aula 374. Implementando a Lógica #02
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true }) // Altero o estado dos itens do objeto
        } else {
            const equals = operation === '=' // pego caso a operação seja igual =
            const currentOperation = this.state.operation // pegando a operação atual

            const values = [...this.state.values] // gerando um clone de values
            // Ao invés de usar o switch ou if, vou usar o eval. o Eval é +- como o execute immediate do oracle!
            // Neste caso, vai gerar uma advertência, mas vamos usá-lo mesmo assim para economizar código!
            // básicamente estou pegando o valor 1 a operação clicada e o valor 2 e jogar no valor zero (que funciona como acumulador)
            try { // o Eval pode gerar algum erro. Melhor tratar
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.value[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0], // Exibe o valor que está na posição 0 do meu array, que uso como acumuladora
                operation: equals ? null : operation, // se for = não faço nada, se não seto o operation com a operação atual
                current: equals ? 0 : 1, // se for igual, vou mexer no valor 0 do array, se não no valor 1
                clearDisplay: !equals,
                values // substituir os valores no estado
            })
        }
    }

    addDigit(n) {
        //console.log(n)
        // Aula 373. Implementando a Lógica #01
        if (n === '.' && this.state.displayValue.includes('.')) {
            return     // Evitar ter 2 pontos na calculadora
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay // Evitar zeros a esquerda
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        // mudar o estado da aplicação
        this.setState({ displayValue, clearDisplay: false})

        if (n !== '.') { // Se n (número) diferente de . 
            const i = this.state.current // pego o indice do valor que eu estou alterando
            const newValue = parseFloat(displayValue) // converto o valor string para float
            const values = [...this.state.values] // clonei os valores (a partir de um spread) em um novo array
            values[i] = newValue // Alterei o valor atual que estou mexendo 
            this.setState({ values }) // substitui o novo valor dentro de state
            console.log(values)
        }

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
                <Display value={this.state.displayValue}/> {/* Setando o display para respeitar o estado do display */}
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