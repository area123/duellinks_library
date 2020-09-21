import axios from 'axios';

export const register = async (data: Object) => {
  try {
    const response = await axios.post('/api/auth/register', data);

    return response.data;
  } catch (e) {
    console.log('이미 아이디가 존재 합니다.');
  }
};

export const login = async (data: Object) => {
  try {
    const response = await axios.post('/api/auth/login', data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const check = async () => {
  try {
    const response = await axios.get('/api/auth/check');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post('/api/auth/logout');
    if (response.status === 204) {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
