//366. Componentes: Pai & Filho #01
// import React from 'react'
// import Filho from './Filho'
// // Repare que o PAI está importando o FILHO

// export default props => 
//     <div>
//         <h1>{props.nome} {props.sobrenome}</h1>
//         <h2>Filhos</h2>
//         <ul>
//             <Filho nome="Luiz Henrique" sobrenome={props.sobrenome} />
//             {/* Fazendo um spread. Estou espalhando todas as propriedades que vieram do filho "*/}
//             <Filho {...props} />
//             {/* em ... props veio os dados do pai, estou trocando o nome para Ana.. */}
//             <Filho {...props} nome="Ana Carolina"/> 
//         </ul>
//     </div>



// Aula 367. Componentes: Pai & Filho #02
// Como aumentar a flexibilidade do meu código?
import React from 'react'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Aqui children é no contexto de filhos do elemento, 
            pois não tem associação entre pai e filho nos componentes */}
            {props.children} 
        </ul>
    </div>