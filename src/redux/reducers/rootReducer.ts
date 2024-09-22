import { combineReducers } from "redux";

import postsReducer from './postReducer'
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    post: postsReducer,
    modal: modalReducer,
    auth: authReducer,
})
export default rootReducer;
