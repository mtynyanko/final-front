import { AuthAction } from "../../types/action.types";
import { SIGN_IN_SUCCESS } from "../actions/constants";
import { AxiosError } from "axios";
import { Profile } from "../api/apiAuth";

interface AuthState {
    email: string;
    id: number;
    token: string;
    authorized: boolean;
}

const initialState: AuthState = {
  email: '',
  id: -10,
  token: '',
  authorized: false,
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
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