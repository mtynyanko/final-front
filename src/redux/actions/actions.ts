import { POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "./constants";

export interface User {
    id: number;
    login: string;
    email: string;
    avatar: string | null;

}
export interface Tag {
    id: number;
    name: string;
}
export interface Post {
    id: number;
    header: string;
    content: string;
    imageUrl: string;
    authorId: number;
    author: User;
    createdAt: Date;
    updatedAt: Date;
    tags: Tag[]
}

export interface PostAction {
    type: string;
    payload?: Post[] | Error;
}

export const requestPosts = (): PostAction => ({
    type: POSTS_REQUEST,
})

export const fetchPostsSuccess = (posts: Post[]): PostAction => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchPostsError = (error: Error): PostAction => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
})


