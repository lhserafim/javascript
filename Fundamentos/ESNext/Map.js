/**
 * MAP
 * Os objetos em JS trabalham na estrutura chave valor
 * A grande diferença entre o objeto e o map é que no OBJETO a chave é APENAS um literal
 * no map a chave PODE SER uma função, um objeto, etc
 * Assim como no JAVA, o MAP não aceita repetição na chave (apenas no valor)
 */

 const tecnologias = new Map(); // Instanciando o MAP
 // Uso o .set para colocar elementos
 tecnologias.set('react', {framework: false}); // chave (react) valor (objeto)
 tecnologias.set('angular', {framework: true});

 console.log(tecnologias.react); // não funciona!
 console.log(tecnologias.get('react')); // pegando a chave react
 console.log(tecnologias.get('react').framework); // pegando a chave react
 
 // Criando o Map já atribuindo as chaves e valores com chaves variadas
 const chavesVariadas = new Map([
     [function(){}, 'Função'],
     [{}, 'Objeto'],
     [123, 'Número']
 ]);

 //(vl, ch) valore e chave, 2 dos 3 param da função callback do foreach
 chavesVariadas.forEach((vl, ch) => {
     console.log(ch, vl);
 });

 console.log(chavesVariadas.has(123)); // Verificando se o array tem a chave 123
 chavesVariadas.delete(123);
 console.log(chavesVariadas.has(123)); // Verificando se o array tem a chave 123
 console.log(chavesVariadas.size);