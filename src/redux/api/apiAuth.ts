// import { api } from "./api";

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


// export const signUpApi = () => {
//   return api.post<AuthResponse>("auth/sign-up");
// };
// export const signInApi = () => {
//     return api.post<AuthResponse>("auth/sign-in");
// };
// export const getProfile = () => {
//     return api.get<Profile>("auth/profile");
// };

