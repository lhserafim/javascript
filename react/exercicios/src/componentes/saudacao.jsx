// Aula 364. Componente de Classe #01
import React, { Component } from 'react' // Usando o destructuring para importar component de react

// Vou exportar uma classe (ao invés de uma função como nos outros exemplos)
export default class Saudacao extends Component {
    // Para que eu possa criar o elemento do tipo input (caixa de texto) e permita que o mesmo seja alterado, preciso definir o state
    state = { 
        tipo: this.props.tipo, // recebendo os valores do index.js
        nome: this.props.nome
    }

    // Crio as funções abaixo para setarem o valor (value) através do evento onchange
    setTipo(e) { // Criando uma fnc e recebendo um evento
        //console.log(e.target.value)
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    render() {
        // Vou tirar de props 2 parametros, tipo (BomDia, BoaTarde, BoaNoite) e nome de props desta instancia (this)
        const { tipo, nome } = this.state 
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}


/**
 * IMPORTANTE
 * No react (diferente do Angular) nós temos um conceito chamado 2 way data bind que seria os dados atualizando 
 * o componente visual OU o componente visual atualizando os dados
 * Isso não existe no REACT. No react o fluxo de atualização é UNIDIRECIONAL
 * Primeiro o estado (state) muda, para que este mudando o componente se atualize
 * 
 */