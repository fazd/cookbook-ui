import axios from 'axios';
import config from '../config/index';

const authURL = `${config.apiURL}/auth`;
const registerURL = `${config.apiURL}/users`;


export const login = async (credentials) => {
  const response = await axios.post(authURL, credentials);
  return response.data;
}

export const register = async (userData) => {
  const response = await axios.post(registerURL, userData);
  return response.data;
}


export const me = async () => {
  const headers = {Authorization: 'Bearer ' + localStorage.getItem('token')};
  const response = await axios.get(authURL, { headers });
  return response.data;
}