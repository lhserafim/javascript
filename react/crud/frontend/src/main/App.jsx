// Aula 377. Criando Componentes (Template)
import React from 'react'
import './App.css'

// Importando os arquivos de template. Não preciso importar o Header, pois ele está dentro de Main!
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props => 
    // Usando uma div pois retorno N elementos
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>