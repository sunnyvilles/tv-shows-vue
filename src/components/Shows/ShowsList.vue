<template>
  <ShowsByGenre
    v-for="(shows, genre, index) in getShowsListByGenre"
    :shows="shows"
    :genre="genre"
    :key="index"
  />
</template>

<script>
import ShowsByGenre from "@/components/Shows/ShowsByGenre.vue";

export default {
  name: "ShowsList",
  components: {
    ShowsByGenre,
  },
  computed: {
    getShowsListByGenre() {
      return this.$store.getters.getShowsListByGenre;
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllShows");
  },
};
</script>
