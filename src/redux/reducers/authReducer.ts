import { AxiosError } from "axios";
import { AuthAction } from "../../types/action.types";
import {
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  SIGN_OUT,
} from "../../types/constants";

interface AuthState {
  id: number | null;
  email: string | null;
  login: string | null;
  avatar: string | null;
  authorized: boolean;
  isLoading: boolean;
  error: null | AxiosError;
}

const initialState: AuthState = {
  id: null,
  email: null,
  login: null,
  avatar: null,
  authorized: false,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        authorized: true,
        isLoading: false,
        id: action.payload.id,
        email: action.payload.email,
        login: action.payload.login,
        avatar: action.payload.avatar,
      };
    case AUTHORIZATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload.id,
        email: action.payload.email,
        login: action.payload.login,
        avatar: action.payload.avatar,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        authorized: false,
      };
    default:
      return state;
  }
};

export default authReducer;
