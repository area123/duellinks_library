import { User } from '@/types/user';

export interface Post {
  id: number;
  title: string;
  content: string;
  sort: '자유게시판' | '공지사항' | '게임' | '콘솔';
  tags: string[];
  userId: number;
  createdAt: Date;
  User: User;
}
