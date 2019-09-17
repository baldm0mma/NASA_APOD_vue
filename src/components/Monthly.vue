<template>
  <div>
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
      monthOfAPODs: []
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
</style>