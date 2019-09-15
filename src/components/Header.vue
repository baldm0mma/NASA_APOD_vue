<template>
  <div class="container">
    <div class="positioning">
      <router-link class="navigation" to="/">
        <img src="../assets/NASA_logo.svg" alt="NASA Logo" />
        <p>Photos Home</p>
      </router-link>
    </div>
    <h1>Nasa's Daily Astronomy Photos for {{currentMonthName}}, {{currentYear}}</h1>
  </div>
</template>

<script>
import { currentMonthName, currentYear } from "../../utilz/dates";

export default {
  name: "Header",
  data() {
    return {
      currentMonthName,
      currentYear
    };
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: #333;
  color: #fff;
}
.container {
  display: flex;
}
.positioning {
  position: absolute;
  left: 20px;
}
.navigation {
  display: flex;
  flex-direction: column;
}
h1 {
  background-color: #333;
  font-size: 2.3rem;
}
img {
  background-color: #333;
}
p {
  background-color: #333;
  padding-right: 10px;
  color: #fff;
}
a {
  text-decoration: none;
}
</style>