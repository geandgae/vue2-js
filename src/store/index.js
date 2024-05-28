import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth'
import posts from './modules/posts'
import titleset from './modules/titleset'
import alert from './modules/alert'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    titleset: titleset,
    auth: auth,
    posts: posts,
    alert: alert
  },
});
