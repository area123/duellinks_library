import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import post from '@/store/modules/post';
import comment from '@/store/modules/comment';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    post,
    comment,
  },
  plugins: [createPersistedState()],
});
