import axios from 'axios';
import Auth from '../App/Auth/Auth';

const API_URL = /localhost/.test(window.location.origin)
  ? 'http://localhost:3000/api'
  : window.location.origin + '/api';

const api = () => {
  const accessToken = Auth.isAuthenticated() ? Auth.getAccessToken() : null;
  return axios.create({
    baseURL: API_URL,
    headers: {
      'X-AccessToken': accessToken
    }
  });
};

export default api;
