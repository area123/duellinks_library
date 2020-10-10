import axios, { AxiosPromise } from 'axios';
import { UserLoginForm, UserForm, User } from '@/types/user';

export const register = (data: UserForm): AxiosPromise<User> => {
  return axios.post('/api/auth/register', data);
};

export const login = (data: UserLoginForm): AxiosPromise<User> => {
  return axios.post('/api/auth/login', data);
};

export const check = (): AxiosPromise<User> => {
  return axios.get('/api/auth/check');
};

export const logout = () => {
  return axios.post('/api/auth/logout');
};
