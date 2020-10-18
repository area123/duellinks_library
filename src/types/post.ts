import { User } from '@/types/user';

export interface Post {
  title: string;
  content: string;
  sort: string;
  tags: string;
}

export interface PostResponse extends Post {
  id: number;
  createdAt: Date;
  user: User;
}
