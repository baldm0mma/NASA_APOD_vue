<template>
  <div>
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
  height: 5rem;
  background-color: #333;
  color: #fff;
}
h1 {
  background-color: #333;
}
</style>