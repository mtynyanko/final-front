import { Post } from "./model.types";

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    error: Error | null;
  }
  
