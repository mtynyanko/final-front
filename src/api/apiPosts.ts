import { AxiosResponse } from "axios";
import { Post } from "../redux/actions/actions";
import { api } from "./api";


export const getPostsApi = (): Promise<AxiosResponse> => {
    return api.get<Post[]>("posts");
};