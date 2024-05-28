export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    addPost(state, post) {
      state.posts.push(post)
    }
  },
  actions: {
    fetchPosts({ commit }) {
      // 게시물 가져오기 로직
      const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
      ];
      commit('setPosts', posts);
    },
    createPost({ commit }, post) {
      // 게시물 생성 로직
      commit('addPost', post);
    }
  },
  getters: {
    posts: state => state.posts
  }
}
