import { Module } from 'vuex';
import { Post, PostResponse } from '@/types/post';
import { AxiosResponse, AxiosError } from 'axios';
import * as postsAPI from '@/api/posts';

interface IPost {
  posts: Post[] | null;
  post: Post | null;
  post_error: AxiosError | null;
  current_page: number | null;
  last_page: number | null;
}

// @ts-ignore
const post: Module<IPost, any> = {
  namespaced: true,
  state: {
    posts: null,
    post: null,
    post_error: null,
    current_page: null,
    last_page: null,
  },
  getters: {},
  actions: {
    async list({ commit }, payload) {
      try {
        const postsResponse: AxiosResponse<PostResponse> = await postsAPI.list(payload.page, payload.sort);
        commit('set_posts', postsResponse.data);
        commit('set_current_page', parseInt(postsResponse.headers['current-page'], 10));
        commit('set_last_page', parseInt(postsResponse.headers['last-page'], 10));
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
        const postResponse: AxiosResponse<PostResponse> = await postsAPI.read(id);
        commit('set_post', postResponse.data);
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
    // @ts-ignore
    async update({ commit }, payload) {
      try {
        await postsAPI.update(payload.id, payload.data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_post_error', response);
      }
    },
  },
  mutations: {
    set_posts(state, data: Post[] | null) {
      state.posts = data;
    },
    set_post(state, data: Post | null) {
      state.post = data;
    }
    ,
    set_post_error(state, data: AxiosError | null) {
      state.post_error = data;
    },
    set_current_page(state, page: number) {
      state.current_page = page;
    },
    set_last_page(state, page: number) {
      state.last_page = page;
    },
  },
};

export default post;
