const title = {
  namespaced: true,
  state: {
    title: 'store',
    content: 'This is some content',
    likes: 0
  },
  mutations: {
    setTitle(state, title) {
      state.title = title
    },
    setContent(state, content) {
      state.content = content
    },
    setLikes(state, likes) {
      state.likes = likes
    },
    incrementLikes(state) {
      state.likes++
    }
  },
  actions: {
    updateTitle({ commit }, title) {
      commit('setTitle', title)
    },
    updateContent({ commit }, content) {
      commit('setContent', content)
    },
    updateLikes({ commit }, likes) {
      commit('setLikes', likes)
    },
    incrementLikes({ commit }) {
      commit('incrementLikes')
    }
  },
  getters: {
    title: state => state.title,
    content: state => state.content,
    likes: state => state.likes
  },
}


export default title