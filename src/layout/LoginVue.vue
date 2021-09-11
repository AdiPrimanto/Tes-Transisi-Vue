<template>
  <div id="app">
    <Nav/>

    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  min-height: 100vh;
}
</style>
