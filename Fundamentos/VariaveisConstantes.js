var a = 3;
let b = 1; // let é uma forma mais moderna de criar variáveis. De preferencia a elt
const c = 10;

// o JS permite RECRIAR as variaveis
var a = 10;

// O let não permite recriar

// Não posso atribuir valor a uma constante
// c = 100; 
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/Users/lhserafim/Estudos/Java Script/Fundamentos/VariaveisConstantes.js:9:3)
//     at Module._compile (internal/modules/cjs/loader.js:1138:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
//     at Module.load (internal/modules/cjs/loader.js:986:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:879:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
//     at internal/main/run_main_module.js:17:47

console.log(a,b,c)
