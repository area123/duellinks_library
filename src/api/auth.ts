import axios, { AxiosPromise } from 'axios';
import { User, UserResponse, UserLoginForm } from '@/types/user';

export const register = (data: User): AxiosPromise<UserResponse> => {
  return axios.post('/api/auth/register', data);
};

export const login = (data: UserLoginForm): AxiosPromise<UserResponse> => {
  return axios.post('/api/auth/login', data);
};

export const check = (): AxiosPromise<UserResponse> => {
  return axios.get('/api/auth/check');
};

export const logout = async () => {
  return axios.post('/api/auth/logout');
};
