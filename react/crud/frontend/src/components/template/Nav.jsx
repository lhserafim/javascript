// Aula 377. Criando Componentes (Template)
import React from 'react'
import './Nav.css'

export default props =>
    <aside className="menu-area">
        {/* Aula 382. Componente Navegação */}
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>