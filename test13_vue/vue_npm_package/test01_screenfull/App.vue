<template>
  <div id="app">
    <ScreenfullTest />
  </div>
</template>

<script>
import ScreenfullTest from './components/ScreenfullTest.vue'

export default {
  name: 'App',
  components: { ScreenfullTest }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
