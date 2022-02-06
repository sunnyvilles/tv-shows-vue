<template>
  <div class="hello">
    <h1>{{ genre }}</h1>
    <p>
      Description
    </p>
    <h3>List of available shows</h3>
    
  </div>
</template>

<script>
export default {
  name: "ShowsSearch",
  props: {
    genre: String,
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
