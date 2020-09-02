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

    // Esta função é que irá acessar a URL, recuperar os cadastros no meu banco e jogar na lista
    componentWillMount() { // Aula 388. Componente Cadastro Usuário #04
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

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

    // Função para atualizar os campos do formulário (nome e email)
    updateField(event) { // Aula 387. Componente Cadastro Usuário #03
        const user = { ...this.state.user }
        // Em react usamos a idéia de clonar o elemento, ao invés de atualizá-lo
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Vai renderizar o formulário
    renderForm() { // Aula 387. Componente Cadastro Usuário #03
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    load(user) { // Aula 388. Componente Cadastro Usuário #04
        this.setState({ user })
    }

    remove(user) { // Aula 388. Componente Cadastro Usuário #04
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() { // Aula 388. Componente Cadastro Usuário #04
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() { // Aula 388. Componente Cadastro Usuário #04
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()} {/* Aula 387. Componente Cadastro Usuário #03 */}
                {this.renderTable()} {/* Aula 388. Componente Cadastro Usuário #04 */} 
            </Main>
        )
    }    
}