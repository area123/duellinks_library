import axios, { AxiosPromise } from 'axios';
import { Post } from '@/types/post';

export const list = (): AxiosPromise<Post> => {
  return axios.get('/api/posts');
};

export const write = (data: Post): AxiosPromise<Post> => {
  return axios.post('/api/posts', data);
};

export const read = (id: number): AxiosPromise<Post> => {
  return axios.get(`/api/posts/${id}`);
};

export const remove = (id: number): AxiosPromise<Post> => {
  return axios.delete(`/api/posts/${id}`);
};

export const update = (id: number): AxiosPromise<Post> => {
  return axios.patch(`/api/posts/${id}`);
};
