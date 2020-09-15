// Aula 418. Interface Gráfica com Vue JS #01

<template>
    <v-container fluid>
        <div class="pills">
            <!-- Vou criar um for, para percorrer os elementos contidos no return do groupedWords 
                Quando quero dizer ao vue para receber uma propriedade, utilizo o : (bind) -->
            <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill'
export default {
    components: { Pill },
    data: function () {
        return {
            groupedWords: [
                {name: 'i', amount: 1234},
                {name: 'you', amount: 980},
                {name: 'he', amount: 853}
            ]
        }
    }

}
</script>

<style>

</style>