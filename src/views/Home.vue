<template>
  <ShowsSearch :onSearch="onSearch" v-model="searchTerm" />
  <ShowsList />
</template>

<script>
// @ is an alias to /src
import ShowsSearch from "@/components/Shows/ShowsSearch.vue";
import ShowsList from "@/components/Shows/ShowsList.vue";

export default {
  name: "Home",
  components: {
    ShowsSearch,
    ShowsList,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    onSearch() {
      if (!this.searchTerm) return;
      //this.$store.dispatch('resetState');
      this.$store.dispatch("fetchSearchResults", this.searchTerm);
    },
  },
};
</script>
