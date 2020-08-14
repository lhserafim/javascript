/**
 * IMPORTANTE!
 * Para exportação e importação temos 2 maneiras de fazê-lo
 * 1: Maneira nativa do ECMAScript 2015
 * export default class Pessoa {}
 * import Pessoa from './pessoa'
 * 
 * 2: Maneira node
 * module.exports = class Pessoa {}
 * const Pessoa = require('.pessoa')
 */

import './modulos/moduloA'

export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
} 