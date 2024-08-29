import { call, put, takeEvery, all } from "redux-saga/effects";

import { AxiosResponse } from "axios";

import { POSTS_REQUEST } from "./actions/constants";
import { fetchPostsSuccess, fetchPostsError, Post } from "./actions/actions";
import { getPostsApi } from "./api/apiPosts";





function* fetchPosts() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPostsApi);
    yield put(fetchPostsSuccess(response.data as Post[]));
  } catch (error) {
    yield put(fetchPostsError(error as Error));
  }
}

function* watchFetchPosts() {
  yield takeEvery(POSTS_REQUEST, fetchPosts);
}

export default function* rootSaga() {
  yield all([watchFetchPosts()]);
}
