import { Actions, PostAction } from "./actions";
import { Post } from "./actions";
import { Reducer } from "redux";


interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [] 
}


const postsReducer: Reducer<PostsState, PostAction> = (state = initialState, action) => {
    switch(action.type) {
        case Actions.ADD_POST: return {
            ...state,
            posts: [...state.posts, ...action.payload]
        };
        case Actions.REWRITE_POSTS: return {
            ...state,
            posts: action.payload,
        }
        default:
            return state;
    }
};

export default postsReducer;