const baseUrl = "https://api.tvmaze.com";
// const categorizedShows = {
//   Drama:[],
//   Comedy:[],
//   Family:[],
//   Crime:[],
//   Romance:[],
//   Action:[],
//   History:[],
//   Sports:[],
//   Fantasy:[],
//   Mystry:[]
// }
// https://api.tvmaze.com/shows?page=1
// https://api.tvmaze.com/shows/1
// https://api.tvmaze.com/search/shows?q=girls

export const getDefaultState = () => {
  return {
    showListApiUrl: `${baseUrl}/shows`,
    searchApiUrl: `${baseUrl}/search/shows`,
    allShows: {},
    selectedShow: {},
  };
};

export default getDefaultState();
