import axios from 'axios';
import config from '../config/index';

const loginURL = `${config.apiURL}/auth`;
const registerURL = `${config.apiURL}/users`;


export const login = async (credentials) => {
  const response = await axios.post(loginURL, credentials);
  return response.data;
}

export const register = async (userData) => {
  const response = await axios.post(registerURL, userData);
  return response.data;
}
