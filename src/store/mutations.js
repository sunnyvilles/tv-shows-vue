export default {
  setAllShows: (state, tvShows) => (state.allShows = tvShows),
  setShow: (state, show) => (state.selectedShow = show),
  resetState(state) {
    state.allShows = {};
    state.selectedShow = {};
  },
};
