import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import post from '@/store/modules/post';

Vue.use(Vuex);

export interface IRootState {
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    post,
  },
});
