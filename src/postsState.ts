import { createSlice } from '@reduxjs/toolkit';

interface ResponseProps {
    id: number;
    header: string;
    content: string;
    imageURL: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}

const initialState: { posts: ResponseProps[] } = {
    posts: [],
}

export const postsState = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        rewritePosts: (state, action) => {
            state.posts.length = 0;
            state.posts = action.payload;
        },
    },
})

export const { addPost, rewritePosts } = postsState.actions

export default postsState.reducer