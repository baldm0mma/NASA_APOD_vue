<template>
  <div>
    <h3>{{daily.title}}</h3>
    <img :src="daily.url" :alt="daily.title"/>
    <p>{{daily.date}}</p>
  </div>
</template>

<script>
  export default {
    props: ['daily']
  }
</script>

<style scoped>
img {
  box-shadow: 0 0 35px black;
  width: 80%;
}
</style>