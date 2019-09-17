<template>
  <div class="loading" v-if="this.isLoading">
    <img src="../assets/loadingIcon.gif" alt="loading gif">
    <p>Loading...</p>
  </div>
  <div v-else-if="this.isLoading === false">
    <ul>
      <li :key="daily.date" v-for="daily in monthOfAPODs">
        <DailyThumbnail :daily="daily" />
      </li>
    </ul>
  </div>
</template>

<script>
import { fullMonthUrl } from "../../utilz/urlz";
import DailyThumbnail from "./DailyThumbnail";

export default {
  name: "Monthly",
  data() {
    return {
      monthOfAPODs: [],
      isLoading: true
    };
  },
  created: function() {
    this.fetchMonthOfAPOD();
  },
  methods: {
    fetchMonthOfAPOD: async function() {
      try {
        const result = await fetch(fullMonthUrl);
        const parsed = await result.json();
        this.monthOfAPODs = parsed.reverse();
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    DailyThumbnail
  }
};
</script>

<style scoped>
div {
  padding-top: 20px;
}
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
.loading {
  padding-top: 50px;
  background-color: #555;
  height: 100vh;
}
img {
  border-radius: 100px;
    box-shadow: 0 0 45px black;
}
p {
  padding-top: 20px;
  font-size: 3rem;
  background-color: #555;
  color: #fff;
}
</style>