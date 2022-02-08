<template>
  <div class="container">
    <Header />
    <article class="main">
      <router-view />
    </article>
    <footer><h3>@tv-shows</h3></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/layout/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  text-align: center;
  background-color: $color;
}
.container > * {
  padding: $outerSpacing;
  margin: $outerSpacing;
  flex: 1 100%;
}
.container {
  footer {
    height: $barHeight;
  }
  .main {
    text-align: left;
  }
}
</style>
