import Pessoa from './pessoa'
//import './assets/css/estilo.css'
import './assets' // ao invés da linha de cima. Isso irá ler o arquivo assets/index.js
// Para eu importar o meu CSS, eu preciso ter o arquivo devidamente criado (conforme mapeado no import acima)
// Configurar o meu webpack.config.js
/**
 *     module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader' // interpreta @import, url(), etc...
            ]
        }]
    }
 */
// E adicionar 2 dependencias no meu package.json
/**
 *   "devDependencies": {
    "css-loader": "0.28.11",
    "style-loader": "0.21.0",
 */

 // Ao final, será injetado o css no meu arquivo public/principal.js



const atendente = new Pessoa
console.log(atendente.cumprimentar() )