import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth'
import posts from './modules/posts'
import state from './modules/state'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    state: state,
    auth: auth,
    posts: posts
  },
});
