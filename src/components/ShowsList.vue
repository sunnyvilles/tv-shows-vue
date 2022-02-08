<template>
    <h3>List of available shows</h3>
    <ShowsByGenre v-for="(shows, genre, index) in getShowsListByGenre" :shows="shows" :genre="genre" :key="index"/>
</template>

<script>
import ShowsByGenre from "@/components/ShowsByGenre.vue";

export default {
  name: "ShowsList",
  components: {
    ShowsByGenre,
  },
  computed :{
    getShowsListByGenre(){
      return this.$store.getters.getShowsListByGenre;
    }
  },
  mounted(){ 
    this.$store.dispatch('fetchAllShows');
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
