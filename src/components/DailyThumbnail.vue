<template>
  <router-link :to="dailyPath">
    <div>
      <h3>{{daily.title}}</h3>
      <img v-if="daily.media_type === 'image'" :src="daily.url" :alt="daily.title" />
      <iframe v-else type="text/html" width="320" height="240" :src="daily.url"></iframe>
      <p>{{daily.date}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["daily"],
  computed: {
    dailyPath: function() {
      return `/photo/${this.daily.date}`;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}
img {
  box-shadow: 0 0 30px black;
  width: 80%;
}
h3 {
  padding-bottom: 15px;
  font-size: 1.2rem;
}
p {
  padding-top: 15px;
  padding-bottom: 30px;
}
</style>