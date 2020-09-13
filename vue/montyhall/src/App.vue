// Aula 411. Problema de Monty Hall #01

<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <!-- Aula 413. Problema de Monty Hall #03 -->
        <Door number="1" :hasGift="false"/> <!-- Repare que para poder passar o boolean, eu preciso usar o bind : -->
    </div>
</template>

<script>
// importação utilizando o padrão de importação de módulos do ECMAScript 2015
import Door from './components/Door' // Aula 413. Problema de Monty Hall #03
export default {
    name: 'App', // Não é obrigatório colocar o name, mas ajuda na hora de inspecionar o elemento
    components: { Door }
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

</style>