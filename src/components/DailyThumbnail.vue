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