import { Post } from "../../types/model.types.ts";
import { PostAction } from "../../types/action.types.ts";

import {
  POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./constants.ts";

export const requestPosts = (): PostAction => ({
  type: POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: Post[]): PostAction => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error: Error): PostAction => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
