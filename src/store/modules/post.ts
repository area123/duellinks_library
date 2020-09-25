import { Module } from 'vuex';
import { IRootState } from '@/store';
import { Post } from '@/types/post';
import { AxiosResponse, AxiosError } from 'axios';
import * as postsAPI from '@/api/posts';

interface IPost {
  post: Post[] | null;
  post_error: AxiosError | null;
}

const post: Module<IPost, IRootState> = {
  namespaced: true,
  state: {
    post: null,
    post_error: null,
  },
  getters: {},
  actions: {
    async list({ commit }) {
      try {
        const postResponse: AxiosResponse<Post> = await postsAPI.list();
        commit('set_post', postResponse.data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_post_error', response);
      }
    },
    async write({ commit }, data: Post) {
      try {
        await postsAPI.write(data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_post_error', response);
      }
    },
    async read({ commit }, id: number) {
      try {
        await postsAPI.read(id);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_post_error', response);
      }
    },
    async remove({ commit }, id: number) {
      try {
        await postsAPI.remove(id);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_post_error', response);
      }
    },
    async update({ commit }, id: number) {
      try {
        await postsAPI.update(id);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_post_error', response);
      }
    },
  },
  mutations: {
    set_post(state, data: Post[] | null) {
      state.post = data;
    },
    set_post_error(state, data: AxiosError | null) {
      state.post_error = data;
    },
  },
};

export default post;
