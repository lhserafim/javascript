// DO WHILE é uma variante do while
// Ele garante que seja utilizado ao menos 1 vez (diferente do while)
// é pouco utilizado

function facaEnquanto() {
    let i = 0;
    do {
        console.log(`Contador: ${i}`);
        i++;
    } while (i < 10);
}

facaEnquanto();