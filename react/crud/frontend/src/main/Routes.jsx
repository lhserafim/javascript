// Aula 385. Implementando Rotas (React Router)
// Este arquivo será responsável por fazer a navegação do meu site dentro de uma área de 
// navegação pré definida, tipo um AJAX

import React from 'react'
// É necessário importar as dependências do react-router
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// Criando um componente funcional
export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' /> { /* Caso alguma rota não mapeada seja informada, redirecionar p/ o HOME */}
    </Switch>