/** 
 * Para importar módulos de terceiros, o processo é feito no terminal
 * node -v v12.18.2
 * npm -v 6.14.5 -> Node Package Manager
 * É pelo npm que eu posso instalar pacotes, como jQuery, React, Angular, etc
 * Ex.:
 * sudo npm i lodash
 * ou 
 * sudo npm i -g npm
 * sudo npm i --save lodash
 * */ 

// // Load the full build.
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');
 
// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
 
// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');


// Load the full build.
// é muito comum referenciar a biblioteca lodash por underline
const _ = require('lodash');
setInterval(() => console.log(_.random(1,1000)),2000);


/** 
 * 
lhserafim@MacBook-Pro-de-Luiz Fundamentos % cd Node
lhserafim@MacBook-Pro-de-Luiz Node % nodemon ImportarModuloTerceiros.js
*/