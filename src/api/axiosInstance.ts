import * as axios from 'axios';

// @ts-ignore
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030/',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

axiosInstance.interceptors.response.use(
  function(response: any) {
    return response;
  },
  (error: any) => {
    return Promise.reject(error.response.data);
  },
);

axiosInstance.interceptors.request.use(function(config: { headers: { Authorization: string; }; }) {
  const token = localStorage.getItem('access-token');
  if ( token != null ) {
    config.headers.Authorization = token;
  }
  return config;
}, function(err: any) {
  return Promise.reject(err);
});
