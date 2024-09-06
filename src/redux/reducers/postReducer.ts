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
      if ("payload" in action) {
        return {
          ...state,
          posts: action.payload,
          isLoading: false,
        };
      }
      return state;
    case FETCH_POSTS_FAILURE:
      if ("payload" in action) {
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      }
      return state;
    default:
      return state;
  }
};
export default postsReducer;
