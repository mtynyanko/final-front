import { AuthAction } from "../../types/action.types";
import { AUTHORIZATION_REQUEST } from "../actions/constants";


interface AuthState {
    id: number | null;
    email: string | null;
    login: string | null;
    avatar: string | null;
    authorized: boolean;
}

const initialState: AuthState = {
  id: null,
  email: null,
  login: null,
  avatar: null,
  authorized: false,
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
      }
        }
  }

export default authReducer
// const postsReducer = (state = initialState, action: PostAction) => {
//   switch (action.type) {
//     case POSTS_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case FETCH_POSTS_SUCCESS:
//       if ("payload" in action && !(action.payload instanceof AxiosError)) {
//         return {
//           ...state,
//           posts: action.payload,
//           isLoading: false,
//         };
//       }
//       return state;
//     case FETCH_POSTS_FAILURE:
//       if ("payload" in action && action.payload instanceof AxiosError) {
//         return {
//           ...state,
//           error: action.payload,
//           isLoading: false,
//         };
//       }
//       return state;
//     default:
//       return state;
//   }