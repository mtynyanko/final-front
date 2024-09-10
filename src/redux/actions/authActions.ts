import { AxiosError } from "axios";
import { AuthResponse, Profile } from "../api/apiAuth";
import { 
    PROFILE_FAILURE,
    PROFILE_REQUEST, 
    PROFILE_SUCCESS, 
    SIGN_IN_FAILURE, 
    SIGN_IN_REQUEST, 
    SIGN_IN_SUCCESS, 
    SIGN_UP_FAILURE, 
    SIGN_UP_REQUEST, 
    SIGN_UP_SUCCESS 
} from "./constants";

export const signInRequest = () => ({
    type: SIGN_IN_REQUEST,
})
export const signUpRequest = () => ({
    type: SIGN_UP_REQUEST,
})
export const getProfileRequest = () => ({
    type: PROFILE_REQUEST,
})

export const signInSuccess = (userData: AuthResponse) => ({
    type: SIGN_IN_SUCCESS,
    payload: userData,
})
export const signUpSuccess = (userData: AuthResponse) => ({
    type: SIGN_UP_SUCCESS,
    payload: userData,
})
export const getProfileSuccess = (profile: Profile) => ({
    type: PROFILE_SUCCESS,
    payload: profile,
})

export const signInFailure = (error: AxiosError) => ({
    type: SIGN_IN_FAILURE,
    error: error,
})
export const signUpFailure = (error: AxiosError) => ({
    type: SIGN_UP_FAILURE,
    error: error,
})

export const getProfileFailure = (error: AxiosError) => ({
    type: PROFILE_FAILURE,
    error: error,
})

  