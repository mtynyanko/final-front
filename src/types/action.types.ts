import { Post } from "./model.types";

export interface PostAction {
  type: string;
  payload?: Post[] | Error;
}
