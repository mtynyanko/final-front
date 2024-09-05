import { combineReducers } from "redux";

import postsReducer from './postReducer'

const rootReducer = combineReducers({
    post: postsReducer,
})
export default rootReducer;