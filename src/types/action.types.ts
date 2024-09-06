import { AxiosError } from "axios";

import { Post } from "./model.types";

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
