import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    async getMovies(data) {
      let movies = await axios.get('http://gsx2json.com/api?id=1FR0FBzjcU1_XF0WuqNPSU5igT7IdWvsR3uRK1rrYR_E&sheet=1&columns=false');
      data.commit('setMovies', movies.data.rows);
    }
  }
})
