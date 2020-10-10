export interface User {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
}

export interface UserResponse {
  data: User;
}

export interface UserForm {
  email: string;
  password: string;
  nickname: string;
}

export interface UserLoginForm {
  email: string;
  password: string;
}
