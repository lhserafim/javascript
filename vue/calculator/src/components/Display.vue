// Aula 405. Criando Componentes
<template>
    <div class="display">
        {{ value }}
    </div>
</template>

<script>
export default {
    // Aula 407. Componente Display
    props: ['value']

}
</script>

<style>
/* Aula 407. Componente Display */
    .display {
        grid-column: span 4;
        background-color: #0004;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
        font-size: 2.1em;
        overflow: hidden;
    }

</style>