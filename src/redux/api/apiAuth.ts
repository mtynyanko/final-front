import { api } from "./api";

interface LoginUserData {
  email: string;
  password: string;
}
interface RegUserData {
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


export const signUpApi = (regUserData: RegUserData) => {
  return api.post<Profile>("auth/sign-up", regUserData);
};
export const signInApi = (loginUserData: LoginUserData) => {
    return api.post<Profile>("auth/sign-in", loginUserData);
};
export const getProfile = () => {
    return api.get<Profile>("auth/profile");
};

