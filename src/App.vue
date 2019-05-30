<template>
  <div id="app">
    <citizen-page></citizen-page>
  </div>
</template>

<script>
/* eslint-disable */
import CitizenPage from './components/chap8/CitizenPage'

export default {
  name: 'App',
  components: {
    CitizenPage
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
