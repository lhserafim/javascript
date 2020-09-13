// Aula 411. Problema de Monty Hall #01

// Aula 414. Problema de Monty Hall #04
// A parte do template foi toda feita na aula 414
<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <div class="form">
            <div v-if="!started">
                <label for="portsAmount">Quantas portas? </label>
                <input type="text" id="portsAmount" size="3"
                    v-model.number="portsAmount"> 
                    <!-- v-model permite utilizar o two way data bind  
                        .number vai converter p/ númerico para que eu possa usar no meu for (acima) -->
            </div>
            <div v-if="!started">
                <label for="selectedPort">Qual porta é premiada? </label>
                <input type="text" id="selectedPort" size="3"
                    v-model.number="selectedPort">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <Door :hasGift="i === selectedPort" :number="i" /> <!-- Repare que para poder passar o boolean, eu preciso usar o bind : -->
            </div>
        </div>
    </div>
</template>

<script>
// importação utilizando o padrão de importação de módulos do ECMAScript 2015
import Door from './components/Door' // Aula 413. Problema de Monty Hall #03
export default {
    name: 'App',
    components: { Door },
    // Aula 414. Problema de Monty Hall #04
    data: function() {
        // Retorna um obj com os parâmetros iniciais default do jogo
        return {
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #fff;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

/* Aula 414. Problema de Monty Hall #04 */
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}
.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}
.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

</style>