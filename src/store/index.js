import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    publicPathState: process.env.BASE_URL,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
