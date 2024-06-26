/* eslint-disable no-unused-vars */
import axiosInstance from '../axiosConfig/instance';

export const loginUser = (data) => {
  return axiosInstance.post('/users/login', data);
};

export const signupUser = (data) => {
  return axiosInstance.post('/users/signup', data);
};

export const getMe = () => {
  const token = localStorage.getItem('token');
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axiosInstance.get('/users/me');
  } else {
    console.error('No token found.');
  }
};

export const updateMe = () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
