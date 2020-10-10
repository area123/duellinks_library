import axios, { AxiosPromise } from 'axios';
import { Comment, CommentRequest, CommentResponse } from '@/types/comment';

export const list = (postId: number): AxiosPromise<CommentResponse> => {
  return axios.get(`/api/comments?postId=${postId}`);
};

export const write = (data: CommentRequest): AxiosPromise<CommentResponse> => {
  return axios.post('/api/comments', data);
};

export const remove = (id: number): AxiosPromise<CommentResponse> => {
  return axios.delete(`/api/comments/${id}`);
};

export const update = (id: number, data: Comment): AxiosPromise<CommentResponse> => {
  return axios.patch(`/api/comments/${id}`, data);
};
