import axios, { AxiosPromise } from 'axios';
import { User, UserRequest, UserResponse } from '@/types/user';

export const register = (data: UserRequest): AxiosPromise<UserResponse> => {
  return axios.post('/api/auth/register', data);
};

export const login = (data: User): AxiosPromise<UserResponse> => {
  return axios.post('/api/auth/login', data);
};

export const check = (): AxiosPromise<User> => {
  return axios.get('/api/auth/check');
};

export const logout = () => {
  return axios.post('/api/auth/logout');
};
