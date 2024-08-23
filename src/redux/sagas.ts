import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { AxiosResponse } from "axios";

import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, POSTS_REQUEST } from "./actions/constants";
import { Post } from "./actions/actions";

const getPostsApi = (): Promise<AxiosResponse> => {
    return axios.get('http://localhost:3001/posts')
}

function* fetchPosts() {
    try {
        const response: AxiosResponse<Post[]> = yield call(getPostsApi);
        yield put({ type: FETCH_POSTS_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({ type: FETCH_POSTS_FAILURE, payload: error});
    }
}

function* watchFetchPosts() {
    yield takeEvery(POSTS_REQUEST, fetchPosts);
}

export default function* rootSaga() {
    yield all([
        watchFetchPosts(),
    ]);
}