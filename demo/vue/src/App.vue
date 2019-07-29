<template>
  <div id="app">
    <h1>Codice Fiscale Utils</h1>
    <h2>Vue Demo</h2>
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
