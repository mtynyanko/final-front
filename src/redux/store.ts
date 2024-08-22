import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducer";

const store = configureStore({
    reducer: postsReducer,
})

export type MyDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store