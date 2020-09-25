import { Module } from 'vuex';
import { IRootState } from '@/store';
import { User, UserResponse, UserForm, UserLoginForm } from '@/types/user';
import { AxiosResponse, AxiosError } from 'axios';
import { register, login, logout } from '@/api/auth';

interface IUser {
  user: User | null;
  user_error: AxiosError | null;
}

const user: Module<IUser, IRootState> = {
  namespaced: true,
  state: {
    user: null,
    user_error: null,
  },
  getters: {},
  actions: {
    async register({ commit }, data: UserForm) {
      try {
        const userResponse: AxiosResponse<UserResponse> = await register(data);
        commit('set_user', userResponse.data.data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_user_error', response);
      }
    },
    async login({ commit }, data: UserLoginForm) {
      try {
        const userResponse: AxiosResponse<UserResponse> = await login(data);
        commit('set_user', userResponse.data.data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_user_error', response);
      }
    },
    async logout({ commit }) {
      await logout();
      commit('set_user', null);
    },
  },
  mutations: {
    set_user(state, data: User | null) {
      state.user = data;
    },
    set_user_error(state, data: AxiosError | null) {
      state.user_error = data;
    },
  },
};

export default user;
