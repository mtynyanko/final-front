import { Reducer } from "redux";

import {
  POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/constants.ts"
import { PostAction } from "../actions/postActions.ts";
import { Post } from "../../types/model.types.ts";
import { PostsState } from "../../types/state.types.ts";



const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsReducer: Reducer<PostsState, PostAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload as Post[],
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload as Error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
