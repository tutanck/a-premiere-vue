<template>
  <div id="app">
    <hello ></hello>
    <hello ></hello>
  </div>
</template>

<script>
import Hello from "./components/chap4/Hello";

export default {
  name: "App",
  components: {
    Hello
  }
};
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
