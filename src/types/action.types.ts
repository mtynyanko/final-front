import { AxiosError } from "axios";

import { Post } from "./model.types";
import { Profile, UserData } from "../redux/api/apiAuth";
import { 
  FETCH_POSTS_FAILURE, 
  FETCH_POSTS_SUCCESS, 
  POSTS_REQUEST, 
  AUTHORIZATION_REQUEST, 
  AUTHORIZATION_SUCCESS, 
  AUTHORIZATION_FAILURE,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  SIGN_OUT
 } from "./constants";

interface PostActionRequest {
  type: typeof POSTS_REQUEST;
}
interface PostActionSuccess {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}
interface PostActionError {
  type: typeof FETCH_POSTS_FAILURE;
  payload: AxiosError;
}
export type PostAction = PostActionRequest | PostActionSuccess | PostActionError;

export interface AuthActionRequest {
  type: typeof AUTHORIZATION_REQUEST;
  payload: UserData;
}
interface AuthActionSuccess {
  type: typeof AUTHORIZATION_SUCCESS;
  payload: Profile;
}
interface AuthActionFailure {
  type: typeof AUTHORIZATION_FAILURE;
  payload: AxiosError;
}
interface ProfileActionRequest {
  type: typeof PROFILE_REQUEST;
}
interface ProfileActionSuccess {
  type: typeof PROFILE_SUCCESS;
  payload: Profile;
}
interface ProfileActionFailure {
  type: typeof PROFILE_FAILURE;
  payload: AxiosError;
}
interface AuthSignOut {
  type: typeof SIGN_OUT;
}
export type AuthAction = 
  AuthActionRequest | 
  AuthActionSuccess | 
  AuthActionFailure |
  ProfileActionRequest |
  ProfileActionSuccess |
  ProfileActionFailure |
  AuthSignOut;

export interface ModalAction {
  type: string;
}