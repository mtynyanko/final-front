import { PostAction } from "../../types/action.types.ts";
import { PostsState } from "../../types/state.types.ts";
import {
  POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/constants.ts";

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default postsReducer;
