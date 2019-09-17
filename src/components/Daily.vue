<template>
  <div class="margin">
    <div class="container">
      <h2>{{this.daily.title}}</h2>
      <h2>{{this.daily.date}}</h2>
    </div>
    <a v-if="this.daily.media_type === 'image'" :href="this.daily.hdurl">
      <img :src="this.daily.url" :alt="this.daily.title" />
    </a>
    <iframe
      v-else-if="this.daily.media_type === 'video'"
      type="text/html"
      width="900"
      height="675"
      :src="daily.url"
    ></iframe>
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
.margin {
  padding-top: 20px;
}
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
.video {
  width: 30%;
}
p {
  padding: 40px 90px;
  text-align: center;
}
</style>