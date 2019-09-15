<template>
  <div>
    <div class="container">
      <h2>{{this.daily.title}}</h2>
      <h2>{{this.daily.date}}</h2>
    </div>
    <a :href="this.daily.hdurl">
      <img :src="this.daily.url" :alt="this.daily.title" />
    </a>
    <p>{{this.daily.explanation}}</p>
  </div>
</template>

<script>
import { specificDateUrl } from "../../utilz/urlz";

export default {
  name: "Daily",
  data() {
    return {
      daily: {}
    };
  },
  created: function() {
    this.fetchDaily();
  },
  methods: {
    fetchDaily: async function() {
      try {
        const result = await fetch(
          `${specificDateUrl}${this.$route.params.id}`
        );
        const parsed = await result.json();
        this.daily = parsed;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0;
}
img {
  box-shadow: 0 0 30px black;
  width: 90%;
}
p {
  padding: 40px 90px;
  text-align: center;
}
</style>