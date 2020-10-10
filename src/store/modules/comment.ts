import { Module } from 'vuex';
import { Comment, CommentRequest, CommentResponse } from '@/types/comment';
import * as commentsAPI from '@/api/comments';

interface IComment {
  comments: CommentResponse[] | null;
  loading: boolean;
}

const comment: Module<IComment, any> = {
  namespaced: true,
  state: {
    comments: null,
    loading: false,
  },
  getters: {
    isComments: (state) => {
      return state.comments !== null;
    },
  },
  actions: {
    list({ commit }, postId: number) {
      commentsAPI.list(postId).then((res) => {
        commit('set_comments', res.data);
      });
    },
    write({ commit, state }, data: CommentRequest) {
      commentsAPI.write(data).then((res) => {
        const concat = state.comments!.concat(res.data);
        commit('set_comments', concat);
      });
    },
    remove({ commit, state }, id: number) {
      commentsAPI.remove(id).then(() => {
        const data = state.comments!.filter((item: CommentResponse) =>
          item.id !== id,
        );
        commit('set_comments', data);
      });
    },
    update({ commit, state }, payload) {
      commentsAPI.update(payload.id, payload.data).then((res) => {
        const data = state.comments!.map((item: CommentResponse) => {
          if (item.id === payload.id) {
            item.content = res.data.content;
            return item;
          } else {
            return item;
          }
        });
        commit('set_comments', data);
      });
    },
  },
  mutations: {
    set_comments(state, data: CommentResponse[] | null) {
      state.comments = data;
    },
    set_loading(state) {
      state.loading = !state.loading;
    },
  },
};

export default comment;
