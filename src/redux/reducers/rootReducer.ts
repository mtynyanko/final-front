import { combineReducers } from "redux";

import postsReducer from './postReducer'
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    post: postsReducer,
    modal: modalReducer,
})
export default rootReducer;
