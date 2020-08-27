import React from 'react'
import Filho from './Filho'
// Repare que o PAI está importando o FILHO

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Luiz Henrique" sobrenome={props.sobrenome} />
            {/* Fazendo um spread. Estou espalhando todas as propriedades que vieram do filho "*/}
            <Filho {...props} />
            {/* em ... props veio os dados do pai, estou trocando o nome para Ana.. */}
            <Filho {...props} nome="Ana Carolina"/> 
        </ul>
    </div>