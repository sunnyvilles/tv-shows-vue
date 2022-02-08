<template>
  <div class="home">
    <ShowsSearch :onSearch="onSearch" v-model="searchTerm"/>
    <ShowsList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowsSearch from "@/components/ShowsSearch.vue";
import ShowsList from "@/components/ShowsList.vue";

export default {
  name: "Home",
  components: {
    ShowsSearch,
    ShowsList,
  },
  data () {
     return { 
        searchTerm: "",
     }
  },
  methods:{
    onSearch() {
     if (!this.searchTerm) return;
      //this.$store.dispatch('resetState');
      this.$store.dispatch('fetchSearchResults',this.searchTerm);
    },
  }
};
</script>
