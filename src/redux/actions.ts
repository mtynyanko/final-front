export const POSTS_REQUEST = 'POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export interface Post {
    id: number;
    header: string;
    content: string;
    imageURL: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface PostAction {
    type: string;
    payload?: Post[] | string;
}

export const requestPosts = (): PostAction => ({
    type: POSTS_REQUEST,
})

export const fetchPosts = (posts: Post[]): PostAction => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchError = (error: Error): PostAction => ({
    type: FETCH_POSTS_FAILURE,
    payload: error.message,
})


