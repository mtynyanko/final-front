import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, POSTS_REQUEST } from "./actions";
import { Post } from "./actions";
import { PostAction } from "./actions";


const getPostsApi = () => {
    return axios.get<Post[], string>('http://localhost:3001/posts')
}


function* fetchPosts() {
    try {
        const response: Post[] = yield call(getPostsApi);
        yield put<PostAction>({ type: FETCH_POSTS_SUCCESS, payload: response.data});
    } catch (error) {
        yield put<PostAction>({ type: FETCH_POSTS_FAILURE, payload: error});
    }
}

function* watchFetchPosts() {
    yield takeEvery(POSTS_REQUEST, fetchPosts);
}

export default watchFetchPosts;