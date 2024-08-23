import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./reducer";
import rootSaga from "./sagas";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: postsReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export type MyDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store