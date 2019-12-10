import { axiosInstance } from '../axiosInstance';

export const signIn = async ({email, password} : any) => {
  return await axiosInstance.post('./api/auth/login', {
    email,
    password,
  });
};

export const refreshTokens = async () => {
  const refreshToken = localStorage.getItem('refresh-token');
  const { data } = await axiosInstance.post('./api/auth/refresh-tokens', {
    refreshToken
  });
  return data
};

export const initializeUser = async () => {
  return await axiosInstance.get('./api/users/initialize')
};
