// Arquivos SASS
// Este aquivo é meu entry point, ou seja, através dele vai achar o index.scss, que vai achar os demais arquivos mapeados
import './scss/index.scss'

// Importando outras dependências
// Se eu não colocar a extensão, o webpack entende que é um .js
import 'jquery'
import 'bootstrap'

// Meus arquivos JS
import './js/core/includes'