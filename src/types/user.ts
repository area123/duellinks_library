export interface User {
  email: string;
  password?: string;
}

export interface UserRequest extends User {
  nickname: string;
}

export interface UserResponse extends User {
  id: number;
  createdAt: Date;
}
