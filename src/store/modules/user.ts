import { register, login, logout } from '@/api/auth';
import { Module } from 'vuex';
import { IRootState } from '@/store';

interface IUser {
  user: JSON | null;
  login_error: boolean;
}

const user: Module<IUser, IRootState> = {
  namespaced: true,
  state: {
    user: null,
    login_error: false,
  },
  getters: {},
  actions: {
    async register({ commit }, data: JSON) {
      commit('set_user', register(data));
    },
    async login({ commit }, data: JSON) {
      commit('set_user', login(data));
    },
    async logout({ commit }) {
      logout();
      commit('set_user', null);
    },
  },
  mutations: {
    set_user(state, data: JSON | null) {
      state.user = data;
    },
  },
};

export default user;
