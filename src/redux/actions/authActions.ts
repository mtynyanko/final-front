import { AxiosError } from "axios";
import { Profile, UserData } from "../api/apiAuth";
import { 
    AUTHORIZATION_FAILURE,
    AUTHORIZATION_REQUEST,
    AUTHORIZATION_SUCCESS,
    PROFILE_FAILURE,
    PROFILE_REQUEST, 
    PROFILE_SUCCESS,
    SIGN_OUT, 
} from "../../types/constants";

export const authRequest = (userData: UserData) => ({
    type: AUTHORIZATION_REQUEST,
    payload: userData,
})
export const authSuccess = (userData: Profile) => ({
    type: AUTHORIZATION_SUCCESS,
    payload: userData,
})
export const authFailure = (error: AxiosError) => ({
    type: AUTHORIZATION_FAILURE,
    payload: error,
})

export const getProfileRequest = () => ({
    type: PROFILE_REQUEST,
})
export const getProfileSuccess = (profile: Profile) => ({
    type: PROFILE_SUCCESS,
    payload: profile,
})
export const getProfileFailure = (error: AxiosError) => ({
    type: PROFILE_FAILURE,
    error: error,
})

export const signOut = () => ({
    type: SIGN_OUT,
})