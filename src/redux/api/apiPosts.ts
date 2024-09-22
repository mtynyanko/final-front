import { AxiosResponse } from "axios";

import { Post } from "../../types/model.types";

import api from "./api";

export const getPostsApi = (): Promise<AxiosResponse>  => {
  return api.get<Post[]>("posts");
};
