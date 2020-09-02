// Aula 377. Criando Componentes (Template)
import React from 'react'
import './App.css'
// Aula 385. Implementando Rotas (React Router)
import { HashRouter } from 'react-router-dom' // Ao invés de HashRouter, poderia ser BrowserRouter // Aqui precisa ser de react dom

import Routes from './Routes'
// Aula 380. Componente Cabeçalho
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// Importando os arquivos de template. Não preciso importar o Header, pois ele está dentro de Main!
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// Aula 383. Componente Conteúdo
//import Main from '../components/template/Main'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

export default props => 
    <HashRouter> 
        {/* Poderia ser o BrowserRouter */}
        <div className="app">
            <Logo />
            <Nav />
            {/* <Home /> Aula 383. Componente Conteúdo */}
            <Routes /> {/* Aula 385. Implementando Rotas (React Router) */}
            <Footer />
        </div>
    </HashRouter>