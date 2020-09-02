// Aula 384. Componente Cadastro Usuário #01
// Este é um componente de CLASSE pois ele tem o ESTADO. Até o momento, todos os demais componentes eram funcionais

import React, { Component } from 'react'
import Main from '../template/Main'

// Criando uma constante que terá algumas propriedades do meu cabeçalho
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

// Ou seja, tenho um OBJETO com as propriedades do cabeçalho que eu vou passar para o componente main 
export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }    
}