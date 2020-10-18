import { Post } from '@/types/post';
import { User } from '@/types/user';

export interface Comment {
  content: string;
  parent: number | null;
  seq: null | number;
}

export interface CommentRequest extends Comment {
  postId: number;
}

export interface CommentResponse extends Comment {
  id: number;
  createdAt: string;
  post: Post;
  user: User;
}
