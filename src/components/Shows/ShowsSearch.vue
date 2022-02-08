<template>
  <div class="search_container">
    <h3>Collection of all Tv shows</h3>
    <form @submit.prevent="onSearch">
      <div class="search">
        <input
          type="text"
          class="search_searchTerm"
          :value="modelValue"
          @input="onInput"
          @keydown.enter.prevent="onSearch"
          placeholder="Search your favourite show"
        />
        <button
          @click.prevent="onSearch"
          type="submit"
          class="search_searchButton"
        >
          <img src="@/assets/search.svg" alt="search" />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ShowsSearch",
  props: ["onSearch", "modelValue"],
  emits: ["update:modelValue"],
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.search_container {
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 50%;
    .search {
      display: flex;
      height: 36spx;
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
        height: 20px;
        outline: none;
        &::placeholder {
          color: white;
        }
      }
      &_searchButton {
        height: 36px;
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
  }

  @media all and (max-width: $breakpoint) {
    form {
      width: 90%;
    }
  }
}
</style>
