import { api } from "./api";

export interface Profile {
    id: number;
    email: string;
};

export interface AuthResponse {
  payload: Profile;
  access_token: string;
};

export const signUpApi = () => {
  return api.post<AuthResponse>("auth/sign-up");
};
export const signInApi = () => {
    return api.post<AuthResponse>("auth/sign-in");
};
export const getProfile = () => {
    return api.get<Profile>("auth/profile");
};

