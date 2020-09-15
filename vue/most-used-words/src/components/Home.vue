// Aula 418. Interface Gráfica com Vue JS #01

<template>
    <v-container fluid>
        <!-- Aula 420. Interface Gráfica com Vue JS #03 
            Formulário que irá receber os arquivos. O v-file-input já cria a entrada para anexar o arquivo -->
        <v-form>
            <!-- 
                multiple -> permite selecionar vários arquivos (e apresenta a quantidade na tela)
                chips -> mostra o label de cada arquivo 
                v-model -> vai permitir o 2 way databind. Vai enviar o conteúdo anexado para o meu data 
                @click:append-outer="processSubtitles" -> irá vincular o meu click ao método-->
            <v-file-input 
                label="Selecione as Legendas" 
                prepend-icon="mdi-message-text"
                append-outer-icon="mdi-send"
                outlined
                multiple 
                chips 
                v-model="files"
                @click:append-outer="processSubtitles">

            </v-file-input>
        </v-form>
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
            files: [], // Espera o dado que vem do v-model, dentro do v-file-input e irá processar pelo método processSubtitles
            groupedWords: [
                {name: 'i', amount: 1234},
                {name: 'you', amount: 980},
                {name: 'he', amount: 853}
            ]
        }
    },
    methods: {
        processSubtitles() {
            console.log(this.files)
        }
    }

}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around; /* Aula 419. Interface Gráfica com Vue JS #02 */
    }
</style>