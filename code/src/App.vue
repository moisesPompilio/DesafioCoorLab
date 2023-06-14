<template>
  <div id="app">
    <NavBar/>
    <HomePage/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './page/HomePage/HomePage.vue';

export default {
  name: 'App',
  components: {
    NavBar,
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
