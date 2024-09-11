import { AxiosError } from "axios";

import { Post } from "./model.types";
import { AuthResponse, Profile } from "../redux/api/apiAuth";

interface PostActionRequest {
  type: string;
}
interface PostActionSuccess {
  type: string;
  payload: Post[];
}
interface PostActionError {
  type: string;
  payload: AxiosError;
}
export type PostAction = PostActionRequest | PostActionSuccess | PostActionError;

interface AuthActionRequest {
  type: string;
}
interface AuthActionFailure {
  type: string;
  payload: AxiosError;
}
interface ProfileActionSuccess {
  type: string;
  payload: Profile;
}
interface AuthActionSuccess {
  type: string;
  payload: AuthResponse;
}
export type AuthAction = AuthActionRequest | AuthActionSuccess | AuthActionFailure | ProfileActionSuccess;

export interface ModalAction {
  type: string;
}