/** 
 * Spread e Rest ou Rest e Spread são os ...
 * O seu nome vai "mudar" dependendo da sua implementação. 
 * Se vc vai agrupar algo é rest
 * Se vc vai espalhar é spread
 * */ 

 // Usar como rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(1,2,3,8,20,20));

 // Usar spread com objeto
 const funcionario = {nome: 'Maria', salario: 12323.00};
 const funcionario2 = {ativo: true, ...funcionario}; // usando o ... para copiar os atributos do outro objeto

 console.log(funcionario2);

 // Usar spread com array;
 const grupoA = ['João', 'Pedro', 'Gloria'];
 const grupoFinal = ['Maria', ...grupoA];
 console.log(grupoFinal);
