import { axiosInstance } from '../axiosInstance';

export const getUserInfo = async () => {
  return await axiosInstance.get('./api/users/getfullinfo');
};

export const getCommonInfo = async () => {
  return await axiosInstance.get('./api/users/getcommoninfo')
};


