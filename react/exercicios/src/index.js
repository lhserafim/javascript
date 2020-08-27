// Para iniciar, vou realizar os imports abaixo, que estão descritos no meu package.json
// "react": "^16.13.1",
// "react-dom": "^16.13.1",

import React from 'react' // SEMPRE importar é usado internamente p/ converter JSX!!
import ReactDOM from 'react-dom'

// A chamada da função abaixo, irá jogar o texto de h1 dentro do meu elemento de id root. Ou seja,
// vai renderizar minha página dentro da div de id root
ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
// IMPORTANTE!
// O JAVA SCRIPT puro, não aceita HTML junto. A chamada acima faz parecer que estamos misturando JS com HTML.
// Na verdade o que foi feito acima é um JAVA SCRIPT X (JSX) ou js eXtended. 
// o react faz um transpile (transpilação) para algo similar a isso:
//$('<h1>').html('React')

// Ou seja, o framework facilita e permite misturar as tecnologias 

