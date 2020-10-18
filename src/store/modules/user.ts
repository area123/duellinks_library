import { Module } from 'vuex';
import { User, UserRequest, UserResponse } from '@/types/user';
import { AxiosResponse, AxiosError } from 'axios';
import { register, login, logout } from '@/api/auth';

interface IUser {
  user: User | null;
  user_error: AxiosError | null;
}

const user: Module<IUser, any> = {
  namespaced: true,
  state: {
    user: null,
    user_error: null,
  },
  getters: {
    isLogin: (state): boolean => {
      return state.user !== null;
    },
  },
  actions: {
    async register({ commit }, data: UserRequest) {
      try {
        const userResponse: AxiosResponse<UserResponse> = await register(data);
        commit('set_user', userResponse.data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_user_error', response);
      }
    },
    async login({ commit }, data: User) {
      try {
        const userResponse: AxiosResponse<UserResponse> = await login(data);
        commit('set_user', userResponse.data);
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
    set_user(state, data: UserResponse | null) {
      state.user = data;
    },
    set_user_error(state, data: AxiosError | null) {
      state.user_error = data;
    },
  },
};

export default user;
