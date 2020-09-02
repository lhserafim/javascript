// Aula 377. Criando Componentes (Template)

import React from 'react'
import './Header.css'

export default props => 
    <header className="header d-none d-sm-flex flex-column"> {/* Aula 380. Componente Cabeçalho - Adicionando classes bootstrap ao meu Header */}
        <h1 className="mt-3">
            {/* Colocando o ícone <i> e recebendo as propriedades definidas em App.jsx <Main /> */}
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>