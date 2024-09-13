import { AxiosResponse, AxiosError } from "axios";
import { getProfile, Profile, signInApi, signUpApi } from "../api/apiAuth";
import { call, takeEvery, put } from "redux-saga/effects";
import { AuthActionRequest } from "../../types/action.types";
import {
  AUTHORIZATION_REQUEST,
  PROFILE_REQUEST,
  UNKNOWN_ERROR,
} from "../../types/constants";
import {
  authFailure,
  authSuccess,
  getProfileFailure,
  getProfileSuccess,
} from "../actions/authActions";


export interface AuthResponse {
  payload: Profile;
  access_token: string;
}


function* authWorker(action: AuthActionRequest) {
  try {
    let response: Profile;
    if ("login" in action.payload) {
      response = yield call(signUpApi, action.payload);
    } else {
      response = yield call(signInApi, action.payload);
    }
    yield put(authSuccess(response));
  } catch (error) {
    const currentError = error instanceof AxiosError;
    yield currentError
      ? put(authFailure(error))
      : put(authFailure(new AxiosError(UNKNOWN_ERROR)));
  }
}

function* profileWorker() {
  try {
    const response: AxiosResponse<Profile> = yield call(getProfile);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    const currentError = error instanceof AxiosError;
    yield currentError
      ? put(getProfileFailure(error))
      : put(getProfileFailure(new AxiosError(UNKNOWN_ERROR)));
  }
}

export default function* authWatcher() {
  yield takeEvery(AUTHORIZATION_REQUEST, authWorker);
  yield takeEvery(PROFILE_REQUEST, profileWorker);
}
