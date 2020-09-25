import axios, { AxiosPromise } from 'axios';
import { UserResponse, UserLoginForm, UserForm } from '@/types/user';

export const register = (data: UserForm): AxiosPromise<UserResponse> => {
  return axios.post('/api/auth/register', data);
};

export const login = (data: UserLoginForm): AxiosPromise<UserResponse> => {
  return axios.post('/api/auth/login', data);
};

export const check = (): AxiosPromise<UserResponse> => {
  return axios.get('/api/auth/check');
};

export const logout = () => {
  return axios.post('/api/auth/logout');
};
