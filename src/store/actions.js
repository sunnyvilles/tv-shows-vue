import axios from "axios";

// server request blueprint
const req = (url,callback) => {
  axios
  .get(url)
  .then(callback)
  .catch(error => {
    console.log(error);
  });
}

// Data Formatting 
const createCategorizedShows = ( showsList ) => {
  let shows = { Misc: []};
  showsList.forEach(element => {
    if(element.genres?.length > 0){
      element.genres.forEach(genre => {
        if(!shows[genre]) shows = {...shows, [genre]:[]};
        shows[genre].push(element)
      })
    }else{
      shows.Misc.push(element);
    }
  });
  if(shows.Misc.length === 0) delete shows.Misc;
  return shows;
}

export default {
      // Fetch all shows list upto max number : 250
      fetchAllShows({commit,state}, pageNo = 1) {
        req(`${state.showListApiUrl}?page=${pageNo}`,(allShows)=>{ 
          return commit("setAllShows", createCategorizedShows(allShows.data) || [])
        })
      },
      // Fetch one show detail 
      fetchShow({commit,state}, id = 1) {
        req(`${state.showListApiUrl}/${id}`,(show)=>commit("setShow", show.data || []))
      },
      // fetch search results based on query
      fetchSearchResults({commit,state}, query) {
        req(`${state.searchApiUrl}?q=${query}`,(searchResults) => {
          const results = searchResults.data.map((result)=> result.show)
          commit("setAllShows", createCategorizedShows(results) || []);
        })
      },
      // reset state variables from results of above api requests
      resetState({commit}) {
        commit("resetState");
      },
  };