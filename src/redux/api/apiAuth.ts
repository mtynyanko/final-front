import { AxiosResponse } from "axios";
import { AuthResponse } from "../sagas/authSaga";
import api from "./api";


export interface LoginUserData {
  email: string;
  password: string;
}
export interface RegUserData {
  email: string;
  login: string;
  password: string;
}
export type UserData = LoginUserData | RegUserData;

export interface Profile {
  id: number;
  email: string;
  login: string;
  avatar: string;
}


export const signUpApi = async (regUserData: RegUserData): Promise<Profile> => {
  const res: AxiosResponse<AuthResponse> = await api.post<AuthResponse>("auth/sign-up", regUserData);
  localStorage.setItem('accessToken', res.data.access_token)
  return res.data.payload;
};
export const signInApi = async (loginUserData: LoginUserData): Promise<Profile> => {
    const res: AxiosResponse<AuthResponse> = await api.post<AuthResponse>("auth/sign-in", loginUserData);
    localStorage.setItem('accessToken', res.data.access_token)
    return res.data.payload;
}
export const getProfile = () => {
    return api.get<Profile>("auth/profile");
};

