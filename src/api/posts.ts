import axios, { AxiosPromise } from 'axios';
import { Post, PostForm } from '@/types/post';

export const list = (page: number, sort: string | null): AxiosPromise<Post> => {
  const url = `/api/posts?page=${page}&sort=${sort}`;
  return axios.get(url);
};

export const write = (data: PostForm): AxiosPromise<Post> => {
  return axios.post('/api/posts', data);
};

export const read = (id: number): AxiosPromise<Post> => {
  return axios.get(`/api/posts/${id}`);
};

export const remove = (id: number): AxiosPromise<Post> => {
  return axios.delete(`/api/posts/${id}`);
};

export const update = (id: number, data: PostForm): AxiosPromise<Post> => {
  return axios.patch(`/api/posts/${id}`, data);
};
