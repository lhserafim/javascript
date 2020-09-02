// Aula 377. Criando Componentes (Template)
import React from 'react'
import './Footer.css'

export default props => 
    <footer className="footer">
        {/* Aula 381. Componente Rodapé */}
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger"></i> por
            <strong> Cod<span className="text-danger">3</span>r</strong>
        </span>
    </footer>