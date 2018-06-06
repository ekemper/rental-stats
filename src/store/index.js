import Vue from 'vue'
import Vuex from 'vuex'
import rentals from './modules/rentals'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rentals
  }
})
