import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locale: 'en'
  },
  mutations: {
    changeState(state, data) {
      state[data[0]] = data[1]
    },
    switchState(state, data) {
      state[data] = !state[data]
    },
    pushToState(state, data) {
      state[data[0]] = [...state[data[0]], ...data[1]]
    }
  }
})
