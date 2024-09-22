import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";

import { Post } from "../../types/model.types";
import { POSTS_REQUEST, UNKNOWN_ERROR } from "../../types/constants";
import { fetchPostsSuccess, fetchPostsError } from "../actions/postActions";
import { getPostsApi } from "../api/apiPosts";

function* fetchPosts() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPostsApi);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    const currentError = error instanceof AxiosError;
    yield currentError
      ? put(fetchPostsError(error))
      : put(fetchPostsError(new AxiosError(UNKNOWN_ERROR)));
  }
}

export default function* watchFetchPosts() {
  yield takeEvery(POSTS_REQUEST, fetchPosts);
}
