<template>
  <header class="header">
    <div class="header-items">
      <img src="@/assets/television.svg" alt="Logo" />
      <span>
        <router-link to="/" v-if="this.$route.name == 'Detail'"
          >Back</router-link
        >
      </span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0px 20px;
  margin: 0px;
  height: 8vh;
  background: goldenrod;
  text-align: right;
  .header-items {
    padding-top: 4px;
    img {
      height: 6vh;
      float: left;
    }
  }
}
</style>
