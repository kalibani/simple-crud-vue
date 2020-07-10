import axios from 'axios';

const apiUrl = 'https://fierce-ocean-45827.herokuapp.com';

export const postLogin = payload => axios.post(`${apiUrl}/user/signin`, payload);
export const postSignup = payload => axios.post(`${apiUrl}/user/signup`, payload);
export const postBook = payload => axios.post(`${apiUrl}/book`, payload);
export const getBooks = params => axios.get(`${apiUrl}/book`, { params });
export const getBook = id => axios.get(`${apiUrl}/book/${id}`);
export const putBook = (id, payload) => axios.put(`${apiUrl}/book/${id}`, payload);
export const deleteBook = id => axios.delete(`${apiUrl}/book/${id}`);
