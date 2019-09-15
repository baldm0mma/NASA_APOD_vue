<template>
  <div id="app">
    <Header />
    <Monthly />
  </div>
</template>

<script>
import Monthly from "./components/Monthly.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Monthly,
    Header
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
  padding: 0;
  margin: 0;
}
</style>
