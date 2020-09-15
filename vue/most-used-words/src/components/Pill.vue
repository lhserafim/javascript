Aula 418. Interface Gráfica com Vue JS #01

<template>
    <div class="pill">
        <span class="name">{{ name }}</span>
        <span class="amount">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    // Recebe as propriedades
    props: ['name', 'amount']
}
</script>

// estou usando scoped para proteger o estilo e só permitir que o mesmo seja usado neste componente
<style>
     /* Aula 419. Interface Gráfica com Vue JS #02 */
    .pill {
        margin: 10px;
        height: 55px;
        border-radius: 30px;
        background-color: crimson;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .pill .name {
        margin-left: 15px;
    }
    
    .pill .amount {
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;

        background-color: #fff;
        color: crimson;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>