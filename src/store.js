import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bikes: 50
  },
  mutations: {
    borrowBike (state) {
      state.bikes--
    },
    returnBick (state) {
      state.bikes++
    }
  },
  actions: {}
})
