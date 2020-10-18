import axios, { AxiosPromise } from 'axios';
import { Post, PostResponse } from '@/types/post';

export const list = (page: number, sort: string | null): AxiosPromise<PostResponse> => {
  const url = `/api/posts?page=${page}&sort=${sort}`;
  return axios.get(url);
};

export const write = (data: Post): AxiosPromise<PostResponse> => {
  return axios.post('/api/posts', data);
};

export const read = (id: number): AxiosPromise<PostResponse> => {
  return axios.get(`/api/posts/${id}`);
};

export const remove = (id: number): AxiosPromise<PostResponse> => {
  return axios.delete(`/api/posts/${id}`);
};

export const update = (id: number, data: Post): AxiosPromise<PostResponse> => {
  return axios.patch(`/api/posts/${id}`, data);
};
