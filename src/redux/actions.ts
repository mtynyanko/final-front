export enum Actions {
    ADD_POST = 'ADD_POST',
    REWRITE_POSTS = 'REWRITE_POSTS',
} 

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
    type: Actions;
    payload: Post[];
}

export const addPost = (post: Post[]): PostAction => ({
    type: Actions.ADD_POST,
    payload: post,
});

export const rewritePosts = (posts: Post[]): PostAction => ({
    type: Actions.REWRITE_POSTS,
    payload: posts,
});



