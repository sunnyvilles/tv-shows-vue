<template>
  <div class="container">
    <header>
      <router-link to="/"><h1>Tv Shows</h1></router-link>
    </header>
    <article class="main">
      <router-view />
    </article>
    <footer><h3>@TV</h3></footer>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  text-align:center;
  background-color:$color;
}

.container >*{
  padding:$outerSpacing;
  margin:$outerSpacing;
  flex: 1 100%;
  header{
    height:$barHeight;
  }
  footer{
    height:$barHeight;
  }
  .main{
    text-align:left;
  }
}



/*
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
