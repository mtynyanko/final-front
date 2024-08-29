import { AxiosResponse } from "axios";
import { Post } from "../actions/actions";
import { api } from "./api";

export const getPostsApi = (): Promise<AxiosResponse> => {
  return api.get<Post[]>("posts");
};
