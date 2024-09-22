import { all } from "redux-saga/effects";

import watchFetchPosts from "./postSaga";
import authWatcher from "./authSaga";

export default function* rootSaga() {
  yield all([watchFetchPosts(), authWatcher()]);
}
