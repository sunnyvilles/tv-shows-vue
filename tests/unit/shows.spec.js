import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import ShowsByGenre from "@/components/Shows/ShowsByGenre.vue";
import Home from "@/views/Home.vue";
import ShowsSearch from "@/components/Shows/ShowsSearch.vue";

describe("ShowsByGenre.vue", () => {
  it("renders genre text in the component", () => {
    const genreTitle = "Drama";
    const wrapper = shallowMount(ShowsByGenre, {
      props: { genre: genreTitle },
    });
    expect(wrapper.text()).toMatch(genreTitle);
  });
});

describe("Home.vue", () => {
  const allShows = { drama: [{ id: 1 }, { id: 2 }] };
  let mockActionFn;
  let store;

  it("calls vuex action for making API call request when search is done by user", async () => {
    mockActionFn = jest.fn();
    store = createStore({
      state: { allShows },
      actions: { fetchSearchResults: mockActionFn },
    });

    const wrapper = shallowMount(Home, {
      global: { plugins: [store] },
    });

    wrapper.vm.searchTerm = "hello";
    await wrapper.vm.onSearch();
    expect(mockActionFn).toHaveBeenCalled();
  });
});

describe("ShowsSearch.vue", () => {
  it("Emits event on button click", async () => {
    const modelValue = "Drama";
    const wrapper = shallowMount(ShowsSearch, {
      props: { modelValue },
    });
    const btn = wrapper.find("button");
    await btn.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
