<template>
  
  <h1>Search</h1>
  <form @submit.prevent="onSearch" class="search">
    <div class="search">
      <input type="text" class="search_searchTerm" :value="modelValue" @input="onInput" @keydown.enter.prevent="onSearch" placeholder="Search your show"/>
      <button
        @click.prevent="onSearch"
        type="submit"
        class="search_searchButton"
      ></button>
      <img src="@/assets/search.svg" alt="search" />
    </div>
  </form>
</template>

<script>
export default {
  name: "ShowsSearch",
  props:["onSearch","modelValue"],
  emits: ["update:modelValue"],
  methods:{
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  }
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  height: 50px;
  margin: 0 auto;
  width: 100%;
  &_searchTerm {
    width: 100%;
    color: white;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background: transparent;
    border: 2px solid #d1d5db;
    border-right: none;
    border-radius: 6px 0 0 6px;
    padding: 6px 10px;
    height: inherit;
    outline: none;
    &::placeholder {
      color: white;
    }
  }
  &_searchButton {
    height: inherit;
    background: transparent;
    color: #fff;
    border: 2px solid #d1d5db;
    border-radius: 0 6px 6px 0;
    border-left: none;
    cursor: pointer;
    font-size: 20px;
    padding: 6px 10px 6px 0;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
