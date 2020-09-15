<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- Aula 418. Interface Gráfica com Vue JS #01   -->
      <!-- O comando abaixo vai criar uma toolbar (cabeçalho) no meu programa--> 
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <!-- [Vuetify] [UPGRADE] 'v-content' is deprecated, use 'v-main' instead. -->
    <!-- <v-content>
      <Home />
    </v-content> -->
    <v-main>
      <Home />
    </v-main>
  </v-app>


</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
