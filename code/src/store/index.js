import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // cidades: { data: [], loading: false },
    // FreightQuotes: { data: [], loading: false },
    Cities: [],
    FreightQuotes: [],
    FreightQuotesValue: {},
    FreightQuotesSpeed: {},
  },
  getters: {
  },
  mutations: {
    setCities(state, data) {
      state.Cities = data;
    },
    setFreightQuotes(state, data) {
      state.FreightQuotes = data;
    },
    setFreightQuotesValue(state, data) {
      state.FreightQuotesValue = data;
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
