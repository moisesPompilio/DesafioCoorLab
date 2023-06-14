<template>
  <div id="app">
    <BestTransport/>
    <HomePage/>
  </div>
</template>

<script>
import BestTransport from './components/BestTransport.vue'
import HomePage from './page/HomePage/HomePage.vue';

export default {
  name: 'App',
  components: {
    BestTransport,
    HomePage
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  background-color: rgb(244, 244, 236);
}
</style>
