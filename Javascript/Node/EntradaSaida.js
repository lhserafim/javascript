// Pegando parametros a partir do terminal

const anonimo = process.argv.indexOf('-a') !== -1;
//console.log(anonimo); // Digitar node EntradaSaida.js -a

if(anonimo) {
    process.stdout.write('Fala anônimo!\n');
    process.exit();
} else {
    process.stdout.write('Informe o seu nome: ');
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n',''); // Removendo o enter que é capturado por padrão
        process.stdout.write(`Fala ${nome}!!\n`);
        process.exit(); // fechar o programa
    })
}