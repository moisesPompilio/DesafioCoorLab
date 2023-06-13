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
</style>
