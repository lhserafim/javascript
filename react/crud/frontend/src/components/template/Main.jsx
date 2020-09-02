// Aula 377. Criando Componentes (Template)
// Arquivo principal da minha aplicação
import React from 'react'
import Header from './Header'
import './Main.css'

export default props =>
    // Como vou retornar + do que 1 elemento (Header e main) preciso envolver em uma div ou React.Fragment ou um array
    <React.Fragment>
        <Header {...props}/> {/* Aula 380. Componente Cabeçalho - Recebendo as propriedades definidas em App.jsx <Main /> */}
        <main className="content container-fluid"> {/* Aula 383. Componente Conteúdo - Adicionando classe container-fluid */}
            {/* Aula 383. Componente Conteúdo */}
            <div className="p-3 mt-3">
                {/* Quero jogar as tags filhas de main dentro nesta posição dentro desta div, portanto importar props.children */}
                {props.children}
            </div>
        </main>
    </React.Fragment>
