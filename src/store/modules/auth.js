export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      // 로그인 로직
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('setUser', null)
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    user: state => state.user
  }
}
