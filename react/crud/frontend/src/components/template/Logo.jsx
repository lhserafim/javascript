// Aula 377. Criando Componentes (Template)

import React from 'react'
import './Logo.css'
// Importar o logo criado fisicamente no diretório
import logo from '../../assets/imgs/logo.png' // Aula 379. Componente Logo
// Aula 385. Implementando Rotas (React Router)
import { Link } from 'react-router-dom'

// Aula 385. Implementando Rotas (React Router)
export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>

// export default props =>
//     <aside className="logo">
//         {/* Aula 379. Componente Logo */}
//         <a href="/" className="logo">
//             <img src={logo} alt="logo" />
//         </a>
//     </aside>