const diaSemana = 'sexta-feira';

switch(diaSemana.toUpperCase()) {
    case 'DOMINGO':
        console.log(1);
        break; // Assim como no java, necessário usar o break
    case 'SEGUNDA':
    case 'SEGUNDA-FEIRA': // Posso passar N cases juntos
        console.log(2);
        break;
    case 'TERÇA':
    case 'TERÇA-FEIRA':
        console.log(3);
        break;
    case 'QUARTA':
    case 'QUARTA-FEIRA':
        console.log(4);
        break;
    case 'QUINTA':
    case 'QUINTA-FEIRA':
        console.log(5);
        break;
    case 'SEXTA':
    case 'SEXTA-FEIRA':
        console.log(6);
        break;
    case 'SABADO':
        console.log(7);                                        
        break;
}