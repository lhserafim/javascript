Aula 418. Interface Gráfica com Vue JS #01

<template>
    <div>
        <span>{{ name }}</span>
        <span>{{ amount }}</span>
    </div>
</template>

<script>
export default {
    // Recebe as propriedades
    props: ['name', 'amount']
}
</script>

<style>

</style>