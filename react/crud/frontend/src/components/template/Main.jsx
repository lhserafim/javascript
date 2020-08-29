// Aula 377. Criando Componentes (Template)
// Arquivo principal da minha aplicação
import React from 'react'
import Header from './Header'
import './Main.css'

export default props =>
    // Como vou retornar + do que 1 elemento (Header e main) preciso envolver em uma div ou React.Fragment ou um array
    <React.Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>
