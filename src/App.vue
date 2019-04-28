<template>
  <div id="app">
    <citizen firstname="Maggie" lastname="Simpson" age="1" ></citizen>
  </div>
</template>

<script>
import Citizen from "./components/chap5/Citizen";

export default {
  name: "App",
  components: {
    Citizen
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
