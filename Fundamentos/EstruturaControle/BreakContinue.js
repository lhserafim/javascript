        // BREAK interrompe a operação e sai dela
        for (let i = 0; i < 10; i++) {
            // Interromper no 5
            console.log(i);
            if (i == 5) {
                break;
            }
        }

        console.log("------------------");
        // CONTINUE ele interrompe a iteração, mas continua no LOOP
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 1) {
                // Quando o resto da divisão for 1, é pq achei um número impar, então interrompe e vai para o próximo
                continue;
            }
            // Números pares
            console.log(i);
        }        