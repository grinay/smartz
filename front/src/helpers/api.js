import axios from 'axios';

const API_URL = /localhost/.test(window.location.origin)
  ? 'http://localhost:3000/api'
  : window.location.origin + '/api';

const api = (auth) => {
  const accessToken = auth.isAuthenticated() ? auth.getAccessToken() : null;
  return axios.create({
    baseURL: API_URL,
    headers: {
      'X-AccessToken': accessToken
    }
  });
};

export default api;
