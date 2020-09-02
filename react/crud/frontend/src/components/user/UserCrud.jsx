// Aula 384. Componente Cadastro Usuário #01
// Este é um componente de CLASSE pois ele tem o ESTADO. Até o momento, todos os demais componentes eram funcionais

import React, { Component } from 'react'
import Main from '../template/Main'
// Aula 386. Componente Cadastro Usuário #02
import axios from 'axios'

// Criando uma constante que terá algumas propriedades do meu cabeçalho
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

// Criando meu estado inicial
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

// Ou seja, tenho um OBJETO com as propriedades do cabeçalho que eu vou passar para o componente main 
export default class UserCrud extends Component {
    // Carregando o estado inicial, conforme const criada, fazendo spread
    state = { ...initialState } // Aula 386. Componente Cadastro Usuário #02

    // Função responsável por limpar o formulário USER. Não vai limpar a lista
    clear() { // Aula 386. Componente Cadastro Usuário #02
        this.setState({ user: initialState.user })
    }

    // Função para inserir ou atualizar o usuário no backend
    save() { // Aula 386. Componente Cadastro Usuário #02
        const user = this.state.user
        // Utilizo duas operações ternárias para definir dinamicamente se é put ou post (pelo id). Se tem id é put se não post
        const method = user.id ? 'put' : 'post'
        // usando a mesma ideia de cima, monto a url com base na lógica do id
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        // as chaves [] substituem a notação ponto .
        // Ou seja, estou chamando um método e passando os parâmetros (url e user) para ele.
        // Além disso, como o axios é baseado em promises, uso o .then
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }
    // Vou atualizar a lista que foi iniciada sem elementos 
    getUpdatedList(user, add = true) { // Aula 386. Componente Cadastro Usuário #02
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }    
}