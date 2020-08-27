// Para iniciar, vou realizar os imports abaixo, que estão descritos no meu package.json
// "react": "^16.13.1",
// "react-dom": "^16.13.1",

import React from 'react' // SEMPRE importar é usado internamente p/ converter JSX!!
import ReactDOM from 'react-dom'

// importando o meu componente personalizado

// IMPORTANTE. 
// Todos os componentes criados por voceê precisam ter a primeira letra maiúscula p/ poder funcionar!
// é a forma que o react entende que é um componente seu e não um html
import Primeiro from './componentes/Primeiro' // Não preciso passar a extensão
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite} from './componentes/Multiplos' // Estou usando o destructuring para importando as funções do arquivo multiplos
import Saudacao from './componentes/saudacao' // O nome do arquivo podes ser minusculo
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


// A chamada da função abaixo, irá jogar o texto de h1 dentro do meu elemento de id root. Ou seja,
// vai renderizar minha página dentro da div de id root
//ReactDOM.render(<h1>React</h1>, document.getElementById('root')) // Comentei pois vou usar abaixo chamando outro componente
// IMPORTANTE!
// O JAVA SCRIPT puro, não aceita HTML junto. A chamada acima faz parecer que estamos misturando JS com HTML.
// Na verdade o que foi feito acima é um JAVA SCRIPT X (JSX) ou js eXtended. 
// o react faz um transpile (transpilação) para algo similar a isso:
//$('<h1>').html('React')

// Ou seja, o framework facilita e permite misturar as tecnologias 

// Aula 361. Primeiro Componente
//ReactDOM.render(<Primeiro />, document.getElementById('root'))

// Aula 362. Componente com parâmetro
//ReactDOM.render(<BomDia nome="Luiz Henrique" idade={10}/>, document.getElementById('root')) // Exemplo passando parametro

// Aula 363. Múltiplos Componentes
// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Luiz" />
//         <BoaNoite nome="Daniela" />
//     </div>
// ,document.getElementById('root'))

// Aula 364. Componente de Classe #01
// ReactDOM.render(
//     <div>
//         <Saudacao tipo="<<TIPO>>" nome="<<NOME>>" />
//     </div>
// , document.getElementById('root'))

// Aula 366. Componentes: Pai & Filho #01
/** Para que a herança funcione, no arquivo index.js, que vai fazer localizar o root e fazer a 
 * injeção e renderização do meu código, preciso importar react, react-dom e meu componente personalizado Pai
 * */ 
// ReactDOM.render(
//     <div>
//         {/* Passando parametros para o componente pai */}
//         <Pai nome="Antonio Carlos" sobrenome="Serafim" />
//     </div>
// , document.getElementById('root'))

// Aula. 367. Componentes: Pai & Filho #02
ReactDOM.render(
    <div>
        {/* Passando parametros para o componente pai */}
        <Pai nome="Antonio Carlos" sobrenome="Serafim">
            <Filho nome="Luiz Henrique" sobrenome="Serafim" idade={37} />
            <Filho nome="Ana Carolina" sobrenome="Serafim" idade={33} />
        </Pai>
    </div>
, document.getElementById('root'))