import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsState";

export default configureStore({
    reducer: {
        values: postsReducer,
    },
})