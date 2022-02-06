<template>
  <div class="home">
    <ShowsSearch term="peaky blinders" />
    <shows-list genre="drama" />
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
};
</script>
