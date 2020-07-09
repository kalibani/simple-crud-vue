/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getCookies } from '../helpers';

export default async () => {
  await axios.interceptors.request.use((config) => {
    const token = getCookies('token');
    if (token) {
      config.headers.Authorization = token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  }, err => Promise.reject(err));
};
