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
    register({ commit }, data: JSON) {
      commit('set_user', register(data));
    },
    login({ commit }, data: JSON) {
      commit('set_user', login(data));
    },
    logout({ commit }) {
      commit('set_user', logout());
    },
  },
  mutations: {
    set_user(state, data: JSON | null) {
      state.user = data;
    },
  },
};

export default user;
