import { AxiosResponse } from "axios";
import { Profile, signInApi } from "../api/apiAuth";
import { call } from "redux-saga/effects";


function* authWorker() {
    try {
        const response: AxiosResponse<Profile> = yield call(signInApi)
    }
}