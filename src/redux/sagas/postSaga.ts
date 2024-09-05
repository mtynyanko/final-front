import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { Post } from "../../types/model.types";
import { POSTS_REQUEST } from "../actions/constants";
import { fetchPostsSuccess, fetchPostsError } from "../actions/postActions";
import { getPostsApi } from "../api/apiPosts";

function* fetchPosts() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPostsApi);
    yield put(fetchPostsSuccess(response.data as Post[]));
  } catch (error) {
    yield put(fetchPostsError(error as Error));
  }
}

export default function* watchFetchPosts() {
  yield takeEvery(POSTS_REQUEST, fetchPosts);
}


