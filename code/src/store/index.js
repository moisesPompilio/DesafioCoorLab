import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Cities: [],
    Transports: [],
    FreightQuotesSmallValue: {},
    FreightQuotesSpeed: {},
  },
  getters: {
  },
  mutations: {
    setCities(state, data) {
      state.Cities = data;
    },
    setTransports(state, data) {
      state.Transports = data;
    },
    setFreightQuotesSmallValue(state, data) {
      state.FreightQuotesSmallValue = data;
    },
    setFreightQuotesSpeed(state, data) {
      state.FreightQuotesSpeed = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
