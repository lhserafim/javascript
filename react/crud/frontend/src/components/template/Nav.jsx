// Aula 377. Criando Componentes (Template)
import React from 'react'
import './Nav.css'
// Aula 385. Implementando Rotas (React Router)
import { Link } from 'react-router-dom'

// Aula 385. Implementando Rotas (React Router)
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Alterado na aula 385, usando Link to "do react". E ele mesmo já coloca o # pois a estratégia usada é HashRouter */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>

// export default props =>
//     <aside className="menu-area">
//         {/* Aula 382. Componente Navegação */}
//         <nav className="menu">
//             <a href="#/">
//                 <i className="fa fa-home"></i> Início
//             </a>
//             <a href="#/users">
//                 <i className="fa fa-users"></i> Usuários
//             </a>
//         </nav>
//     </aside>