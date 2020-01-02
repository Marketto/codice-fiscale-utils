<template>
  <div id="app">
    <img alt="vue-logo" src="./assets/logo.png">
    <h1>Codice Fiscale Utils</h1>
    <CodiceFiscale/>
  </div>
</template>

<script>
import CodiceFiscale from './components/CodiceFiscale.vue'

export default {
  name: 'app',
  components: {
    CodiceFiscale
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
