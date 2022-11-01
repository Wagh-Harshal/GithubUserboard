import { createStore } from 'vuex'

export default createStore({
  state: {
    searchKey: ''
  },
  mutations: {
    search(state, payload) {
      return state.searchKey = payload.search;
    },
  },
  actions: {
    search(context, payload) {
      context.commit('search', payload)
    },
  },
})
